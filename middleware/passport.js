const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../model/User");
module.exports = (passport) => {
	  passport.use(new GoogleStrategy({
	    clientID: process.env.GOOGLECLIENT,
	    clientSecret: process.env.GOOGLESECKEY,
	    callbackURL: "http://localhost:5000/auth/callback",
	    passReqToCallback : true
	   },
	   async (request, accessToken, refreshToken, profile, done) => {
		try {
	      let existingUser = await User.findOne({ 'id': profile.id });
	       
	      if (existingUser) {
	       return done(null, existingUser);
	      }
	     
	      const newUser = new User({
	       method: 'google',
	        id: profile.id,
	        name: profile.displayName,
	        email: profile.emails[0].value,
			profile:profile.picture
	       
	      });
	      await newUser.save();
	      return done(null, newUser);
	    } catch (error) {
	      return done(error, false)
	    }
	   }
	  ));
	passport.serializeUser((user , done) => {
		done(null , user);
	})
	passport.deserializeUser(function(user, done) {
		done(null, user);
	});
	
	
	}