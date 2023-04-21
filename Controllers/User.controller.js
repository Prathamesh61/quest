// const { UserModel } = require("../models/User.model");
require("dotenv").config()
var Instagram = require('passport-instagram');
const InstagramStrategy = Instagram.Strategy;
const passport = require('passport');

passport.use(new InstagramStrategy({
    clientID: process.env.IG_CLIENT_ID,
    clientSecret: process.env.IG_CLIENT_SECRET,
    callbackURL: process.env.IG_CALLBACK_URL
},
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
    }
));

const instagramLogin = passport.authenticate('instagram')
const instagramCallback = passport.authenticate('instagram', { successRedirect: '/', successMessage: 'Logged In', failureRedirect: '/login', failureMessage: 'Login Again' })

module.exports = { instagramLogin, instagramCallback }