const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { JWT_ISSUER } = require('../dynamicConstants');

const loginService = (aUserName, aPassword) => {
    const tempUserName = "admin"; // These should be verified from db
    const tempPassWord = "admin"; // These should be verified from db

    if (aUserName === tempUserName && aPassword === tempPassWord) {
        const userID = "get_user_ID_from_db";

        const payloadJWT = {
            userID,
            issuer: JWT_ISSUER,
            sub: "User_Login_TOKEN",
            role: "Premium_Customer",
            iat: Date.now(),// issued at
            jwt_id: uuidv4(),
        }

        var token = jwt.sign(payloadJWT, 'env.auth.jwtSecret', { expiresIn: '12d' });

        return token;
        // The Token Should Also be stored in a mongoDB collection
    }
}

module.exports = {
    loginService,
}
