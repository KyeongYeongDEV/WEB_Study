import app from "../app";
import request from "supertest";

describe("Express server test", ()=>{
    test("GET / 요청에 서버가 정상적으로 응답하는지 확인", async ()=>{
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("port 8000 server start");
    });
})