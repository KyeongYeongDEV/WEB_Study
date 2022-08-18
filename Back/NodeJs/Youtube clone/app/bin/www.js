const app = require("../app"); //  현재파일 경로보다 상위 폴더로 가서 / app을 불러온다.
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("서버 가동");
}) ;

//여기까지만 진행했을 경우 서버를 띄우려면 
//명령어  node www.js 로 해줘야 한다.
//이유는 listen이 서버를 띄워주는 코드이기 때문이다.