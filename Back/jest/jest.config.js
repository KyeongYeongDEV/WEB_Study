module.exports = {
    preset: "ts-jest", // 이 부분에서 ts-jest를 사용한다고 알려준다
    testEnvironment: "node", //테스트 환경 'node' 환경을 사용한다 알려줌
    testMatch: ["**/tests/*.test.(ts|tsx)"], //js 파일은 dist에서도 감지가 될 수 있으니 폴더를 조정해서 test이 있는 위치로 잡아준다. 
    setupFiles: ['dotenv/config'], // .env 파일 로드
    forceExit: true, // 테스트 종료 후 강제 종료
    detectOpenHandles: true // 열려 있는 핸들 감지
  };