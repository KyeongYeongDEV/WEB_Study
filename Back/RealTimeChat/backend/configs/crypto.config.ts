import Crypto from "../helpers/crypto.helper";
import dotenv from "dotenv";

dotenv.config();

const saltRounds : number= 2 ; 

export default new Crypto(saltRounds);