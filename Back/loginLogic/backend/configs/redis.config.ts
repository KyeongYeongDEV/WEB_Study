import {createClient, RedisClientType} from "redis";

const redisClient : RedisClientType= createClient();

redisClient.on('error', (err : Error)=>{
    console.log(`Redis Client Error!\n${err}`);
});

redisClient.on("connect", () =>{
    console.log("Redis Connected");
})
redisClient.connect();

export const setValue = async (key : string, value : string, expire : number) => {
    try{
        await redisClient.set(key, value, {EX : expire});
    }catch(err){
        console.log(err);
    }
};
export const getValue = async(key : string)  : Promise<string | null> => {
    try{
        return await redisClient.get(key);
    }catch(err){
        console.log(err);
        return null;
    }
};
export const deleteValue = async (key : string) : Promise<number>=> {
    try{
        return await redisClient.del(key);   
    }catch(err){
        console.log(err);

        return 0;
    }    
}