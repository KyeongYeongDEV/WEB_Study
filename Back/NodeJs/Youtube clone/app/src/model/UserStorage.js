"use-strict";

class UserStorage{
    static #users={//static을 통해 정적변수로 만들어준다.
        //이렇게 하면 ctrl에서 클래스를 안 불러와도 사용할 수 있다. 
        // '#'을 이용해 private로 바꿔준다.
        id: ["woorimIT", "나개발", "김팀장"],
        psword:["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields){// ...을 통해 여러 개를 받아올 수 있다.
        const users = this.#users
        const newUser = fields.reduce((newUsers,field)=>{
            //reduce 배열의 메소드, 반복문 느깜
            if(users.hasOwnProperty(field)){//user에 해당하는 key 값이 있는지 물어본다.
                newUsers[filed] = users[field];
            }
            return newUsers;
        },{});
        console.log(newUsers);
        return;
    };
};

module.exports = UserStorage;