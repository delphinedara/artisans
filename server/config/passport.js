 //  this needs to be modified and tested but what this does is it loads bCrypt, and sets our login strategy to 
 // a local-strategy. Also, this introduces hashing of passwords with SALTS to secure user data. 


 //load bcrypt
 var bCrypt = require('bcrypt-nodejs');

 module.exports = function(passport, user) {

     var User = user;
     var LocalStrategy = require('passport-local').Strategy;


     passport.serializeUser(function(user, done) {
         done(null, user.id);
     });


     // used to deserialize the user
     passport.deserializeUser(function(id, done) {
         User.findById(id).then(function(user) {
             if (user) {
                 done(null, user.get());
             } else {
                 done(user.errors, null);
             }
         });

     });


     passport.use('local-signup', new LocalStrategy(

         {
             usernameField: 'badgeId',
             passwordField: 'password',
             passReqToCallback: true // allows us to pass back the entire request to the callback
         },

         function(req, email, password, done) {


             var generateHash = function(password) {
                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
             };

             User.findOne({ where: { badgeId: badgeId } }).then(function(user) {

                 if (user) {
                     return done(null, false, { message: 'That badgeID already exists' });
                 } else {
                     var userPassword = generateHash(password);
                     var data = {
                         badgeId: badgeId,
                         password: userPassword,
                         firstname: req.body.firstname,
                         lastname: req.body.lastname
                     };


                     User.create(data).then(function(newUser, created) {
                         if (!newUser) {
                             return done(null, false);
                         }

                         if (newUser) {
                             return done(null, newUser);

                         }


                     });
                 }


             });



         }



     ));

     //LOCAL SIGNIN
     passport.use('local-signin', new LocalStrategy(

         {

             // by default, local strategy uses username and password, we will override with email
             usernameField: 'badgeId',
             passwordField: 'password',
             passReqToCallback: true // allows us to pass back the entire request to the callback
         },

         function(req, email, password, done) {

             var User = user;

             var isValidPassword = function(userpass, password) {
                 return bCrypt.compareSync(password, userpass);
             }

             User.findOne({ where: { badgeId: badgeId } }).then(function(user) {

                 if (!user) {
                     return done(null, false, { message: 'This Badge ID was not found' });
                 }

                 if (!isValidPassword(user.password, password)) {

                     return done(null, false, { message: 'Incorrect password.' });

                 }

                 var userinfo = user.get();

                 return done(null, userinfo);

             }).catch(function(err) {

                 console.log("Error:", err);

                 return done(null, false, { message: 'Something went wrong when siging you in' });


             });

         }
     ));

 }