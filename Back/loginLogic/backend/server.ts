import app from "./app";
import dotenv from "dotenv"

dotenv.config()

const port = process.env.SERVER_PORT

app.listen(port ,async()=>{
    console.log(`server port ${port} is start`)
})

