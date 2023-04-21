const express = require('express');
const { connection } = require('./Config/db');
const app = express();
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
var Instagram = require('passport-instagram');
const InstagramStrategy = Instagram.Strategy;
const session = require('express-session');
const { user_route } = require('./Routes/User.route.js');

const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


passport.use(new InstagramStrategy({
    clientID: process.env.IG_CLIENT_ID,
    clientSecret: process.env.IG_CLIENT_SECRET,
    callbackURL: process.env.IG_CALLBACK_URL
},
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
    }
));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

// Initialize Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/home", (req, res) => {
    res.send("Homepage")
})
app.get("/failed", (req, res) => {
    res.send("Homepage")
})
// app.use("/auth", user_route);
// Define route for Instagram authentication
app.get('/auth/instagram',
    passport.authenticate('instagram'));

// // Define callback route for Instagram authentication
app.get('/auth/instagram/callback',
    passport.authenticate('instagram', {}));

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("Connection to DB successfully")
    }
    catch (err) {
        console.log("Error connecting to DB")
    }
    console.log("Listening on PORT", PORT)
})