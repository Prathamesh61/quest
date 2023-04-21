let express = require("express");
const { instagramLogin, instagramCallback } = require("../Controllers/User.controller");

let user_route = express.Router();

user_route.post("/instagram", instagramLogin);
user_route.post("/instagram/callback", instagramCallback);
module.exports = { user_route };