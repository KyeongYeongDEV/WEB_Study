import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = 'isPublic'; //public이라는 이름의 데코레이터를 만들었다. 
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
