const express=require("express")
const app=express()
const db=require("./helper/connection")
const cookie=require("cookie-parser")
db.connect()
require('dotenv').config()
const passport = require('passport');
require('./middleware/passport')(passport)
const expresssession=require("express-session")
const auth=require("./routes/auth/auth")
app.use(expresssession({secret:"sec",resave:false,saveUninitialized:false}))
app.use(passport.initialize());
app.use(passport.session());
app.use("/",auth)
app.use(cookie())
//dummmy route for testing just a button on "localhost:5000/ route"
app.get('/', (req, res) => {
    res.send("<button><a href='/auth'>Login With Google</a></button>")
});
 //end 
app.listen(process.env.PORTNO,()=>{
    console.log(`server is running ${process.env.PORTNO}`)
})