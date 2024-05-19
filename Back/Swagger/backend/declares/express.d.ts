import { UserPayload } from "../types/user.type";

declare global{
    namespace Express{
        interface Request{
            user ?:UserPayload
        }
    }
}