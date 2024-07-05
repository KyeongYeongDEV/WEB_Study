import { configDotenv } from "dotenv";
import Redis from "ioredis";

const redisClient = new Redis({
    host : 'localhost',
    port : 6379
});

redisClient.on('connect',()=>{
    console.log("Redis Client connected");
})

redisClient.on('error', (err)=>{
    console.log("Redis client error ", err);
})

export default redisClient;