import Bcrypt from "../helper/bcrypt.helper";
import dotenv from "dotenv";

dotenv.config();

const saltRounds : number = process.env.SALTROUNDS as any;

export default new Bcrypt(saltRounds);