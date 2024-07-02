import app from "../app";
import connection from "../configs/db.config";
import request from "supertest";

describe("AuthController test",()=>{
    let server : any;

    beforeAll( ()=>{
        server = app.listen();
    });
    afterAll(async ()=>{
        server.close();
    });
    

    test("POST /api/auth/code 요청 테스트 - 성공", async()=>{
        const response = await request(app)
        .post ("/api/auth/code")
        .send({userEmail : "cky2662@naver.com"});

        expect(response.status).toBe(200);
        expect(response.body).toBe({"msg": "Success send to email"});
    })
})

