const express = require("express");
const app = express();
const router = express.Router();

// login// 

router.get("/login" , function (req, res) {
    res.send("This is the loging through auth")
});

router.get("/logout" , function (req, res) {
    res.send("This is the logout through auth")
});

router.get("/recovery" , function (req, res) {
    res.send("This is the recovery through auth")
});

module.exports = router; // esto va al final para exportar todo en roouter, y router tiene todos los valores que le asigne yo //