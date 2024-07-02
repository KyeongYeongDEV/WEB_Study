// import axios from "axios";
// import config from "../config/general.config.js";
// import * as crypto from "crypto";

// const { NAVER: { SENS_ACCESS_KEY, SENS_SECRET_KEY, SMS_SERVICE_ID } } = config;
// const SENS_API_URI = `/sms/v2/services/${SMS_SERVICE_ID}/messages`;

// // 메시지를 보내는 함수
// export const sendMessage = async (to: string | string[], content: string): Promise<void> => {
//   const timestamp = Date.now().toString();
//   const signature = makeSignature(timestamp);

//   // `to`가 배열인지 확인하고 메시지 객체를 생성
//   const messages = Array.isArray(to) 
//     ? to.map((number: string) => ({ to: number })) 
//     : [{ to: to }];

//   try {
//     await axios.post(`https://sens.apigw.ntruss.com${SENS_API_URI}`, {
//       type: 'SMS',
//       countryCode: '82',
//       from: '01012345678', // 발신자 번호를 실제 번호로 변경 필요
//       content,
//       messages
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'x-ncp-apigw-timestamp': timestamp,
//         'x-ncp-iam-access-key': SENS_ACCESS_KEY,
//         'x-ncp-apigw-signature-v2': signature
//       }
//     });
//   } catch (error) {
//     console.error(`Error sending message: ${error}`);
//     throw error;
//   }
// };

// // 시그니처를 생성하는 함수
// const makeSignature = (timestamp: string): string => {
//   const space = " ";        // 공백 문자
//   const newLine = "\n";     // 줄바꿈 문자
//   const method = "POST";    // HTTP 메서드

//   // HMAC SHA256 해시를 생성
//   const hmac = crypto.createHmac('sha256', SENS_SECRET_KEY);
//   hmac.update(`${method}${space}${SENS_API_URI}${newLine}${timestamp}${newLine}${SENS_ACCESS_KEY}`);

//   // 해시를 base64로 인코딩하여 반환
//   return hmac.digest('base64');
// }
