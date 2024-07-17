import express, {Request, Response, NextFunction} from "express";
import {MongoClient, ObjectId} from "mongodb"


const app = express();
const PORT = 8000;
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = "user";
const COLLECTION_NMAE = "users";

//MongoDb 클라이언트 생성
const client = new MongoClient(MONGO_URL);
const db = client.db(DB_NAME);
const collection = db.collection(COLLECTION_NMAE);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, async()=>{
    try{
        await client.connect();
        console.log(`server is running on port ${PORT}`);
        console.log("Conneted to MongoDB");
    }catch(err){
        console.error("Failed to connect to MongoDB:", err);
    }
});

//사용자 생성( Create )
app.post("/users", async(req :Request, res : Response)=>{
    try{
        const newUser = req.body;
        const result = await collection.insertOne(newUser);
        res.json(result);
    }catch(err){
        console.error("Error createing user : ", err);
        res.status(500).json({error : 'Failed to create user'});
    }
})

//사용자 조회(Read)
app.get("/users",async (req:Request, res: Response, next : NextFunction)=>{
    try{
        const users = await collection.find().toArray(); //모든 사용자 조회
        res.json(users); //조회된 사용자 목록 응답
    }catch(err){
        console.error("Error fetching users : ", err);
        res.status(500).json({error : "Failed to fetch users"});
    }
});

//사용자 없데이트 (Update)
app.put("/users/:id", async(req :Request, res : Response, next : NextFunction)=>{
    try{
        const userId = req.params.id;
        const updatedUser = req.body;
        
        const result = await collection.updateOne(
            {_id : new ObjectId(userId)},
            {$set : updatedUser}
        );

        res.json(result.modifiedCount); //업데이트된 문서 수 응답
    }catch(err){
        console.error('Error updating user : ', err);
        res.status(500).json({error : "Failed to update user"});
    }
});

//사용자 삭제
// app.delete('/users/:id', async(req : Request, res : Response, next : NextFunction)=>{
//     try{
//         const userId = req.params.id;
        
//         const result = await collection.deleteOne({_id : new ObjectId(userId)});
//         res.json(result.deletedCount); //삭제된 문서 수 응답
//     }catch(err){
//         console.error("Error deleting user : ", err);
//         res.status(500).json({error : "Failed to delete user"});
//     }
// })



app.delete('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;

        // ObjectId가 유효한지 확인합니다.
        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ error: "Invalid user ID" });
        }

        const objectId = new ObjectId(userId);

        const result = await collection.deleteOne({ _id: objectId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User deleted successfully", deletedCount: result.deletedCount });
    } catch (err) {
        console.error("Error deleting user: ", err);
        res.status(500).json({ error: "Failed to delete user" });
    }
});