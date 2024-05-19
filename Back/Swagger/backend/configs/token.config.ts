import Token from '../helpers/token.helper';

const accessToken = new Token("access_secret");
const refreshToken = new Token("refresh_secret");

export {accessToken, refreshToken};