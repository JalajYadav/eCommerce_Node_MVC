const { loginService } = require("../services/auth.service");

const loginCtrl = (req, res) => {
    const { username, password } = req.body;
    try {
        const token = loginService(username, password);
        res.send(`Here is your token 🚀, ${token}`)
    }
    catch (error) {
        console.error(error)
    }
}

const registerCtrl = (req, res) => {
    console.log("You have hit the register controller");
}

module.exports = {
    loginCtrl,
    registerCtrl,
}
