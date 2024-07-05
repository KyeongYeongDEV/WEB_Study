import redisClient from "../configs/redis.config";

export const setRedisValue = async(key : string, value : string, expireSconds : number)=>{
    try{
        await redisClient.set(key, value);
        
        if(expireSconds){
            await redisClient.expire(key, expireSconds);
        }
    }catch(err){
        console.log('Error setting value in Redis : ', err);
    }
};

export const getRedisValue = async(key : string) : Promise<string | any> =>{
    try{
        return await redisClient.get(key);
    }catch(err){
        console.error("Error getting value from Redis : ", err);
        return null;
    }
};

export const deleteRedisValue = async (key : string) : Promise <void> =>{
    try{
        await redisClient.del(key);
    }catch(err){
        console.error("Error deleting value from Redis : ", err);
    }
};