const route=require("express").Router()
const passport = require('passport');
const{authController,authcallbackController}=require("../../controller/auth")

route.get("/auth",passport.authenticate('google', { scope:
    [ 'email', 'profile' ]
}),authController)

route.get("/auth/callback",passport.authenticate( 'google')
,authcallbackController
)

module.exports=route