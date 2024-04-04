import {Router, Request, Response, NextFunction} from "express";
import session  from "express-session";
import connectionPool from "../config/db";

const router = Router();

router.use(session({
    secret : "암호", // 세션 암호화
    resave : false, // 세션 데이터를 저장소에 저장하기 전에 변경 여부를 확인 후 'false'로 설정할 경우 변경사항이 없으면 저장을 안한다.
    saveUninitialized : false // 초기화되지 않은 세션을 저장소에 저장할지 여부를 결정 // false로 설정할 경우 세션데이터가 변경되기 전까지 저장소에 세션을 저장하지 않는다
    //이렇게 하면 불필요한 세션 데이터를 저장하는 것을 방지하여 성능 향상
}))

declare module "express-session"{
    interface SessionData{
        user ? : {
            uid : number,
            userid : string,
            username : string
        }
    }
}

async function isExistUserByUserId(userId:string){
    type userType= {
        uid : number,
        userid: string,
        username : string,
        userpw : string,
    }

    const connection = connectionPool.getConnection();
    const [users, fields]  = await (await connection).query(`
        SELECT *from owners
        WHERE userid = ?`,[userId]
        ) as [userType[],object];

    if(users.length === 0) throw new Error("can not find user");

    return users[0];
}

function isSameUserByUserPw(userPw : string, foundUserPw : string) : boolean{
    return (userPw === foundUserPw ? true : false);
}

//TODO: getUserInfo
router.get("/", (req:Request, res:Response, next:NextFunction)=>{
    if(!(req.session && req.session.user))
        res.send("회원 정보가 없습니다")
    res.send(req.session.user);
})

router.post("/login" ,async(req:Request, res:Response, next: NextFunction)=>{
    try{
        type loginData = {
            userid : string,
            userpw : string
        }
        const user = req.body as loginData
        console.log(req.sessionID) //컴터 하나당 하나
        
        const foundUser = await isExistUserByUserId(user.userid) //아이디가 있는 아이디인지 먼저 검사를 해야 한다
        if(!(isSameUserByUserPw(user.userpw,foundUser.userpw))) throw new Error("not valid user");

        req.session.user = {
            uid : foundUser.uid,
            userid : foundUser.userid,
            username : foundUser.username
        }
        res.send("succesfully login")
    }catch(err){
        next();
    }
})

router.post("/logout",(req:Request, res : Response, next : NextFunction)=>{
    try{
        if(!(req.session && req.session.user))
            return res.send("로그인 실패");
        req.session.destroy((err)=>{
            if(err) throw new Error("실패")
        })

        res.send("로그아웃 성공");
    }catch(err){
        next(err);
    }
})








export default router;