//This file is kicked off by /bin/www.

// PACKAGES //
var express = require('express');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');

// IMPORT THEM ROUTES //
var indexRoutes = require('./routes/index');

// CREATE EXPRESS APP //
var app = express();

// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
    fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../client/public')));

// USE THEM ROUTES //
app.use('/', indexRoutes);


// ERROR HANDLER //
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
});

// SERVE APP //
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Running on localhost: ' + port);
});

//module.export = app; < Something something, this.

//Development Mongoose.
/*if*/ 



//a lot of this is from an old project but there is a section within this that helps passport.js
//function.




// // *****************************************************************************
// // Server.js - This file is the initial starting point for the Node/Express server.
// //
// // ******************************************************************************
// // *** Dependencies
// // =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require('path');
// var patients = require('./models/patients.js');
// var nodemon = require('nodemon');
// var cookieParser = require('cookie-parser');

// // our express router 
// var router = express.Router();

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 6069;

// // Requiring our models for syncing
// var db = require("./models");

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(express.static(path.join(__dirname, '/views/')));
// app.use(express.static(path.join(__dirname, '/views/layouts/css')));



// // Routes
// // =============================================================
// require("./routes/api-routes.js")(app);
// // console.log(db.Patient);

// // creating a view engine with Handlebars
// var exphbs = require('express-handlebars');

// // var handlebars = require('handlebars');
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // index page 
// app.get('/patients', function(req, res) {
//     db.Patient.findAll({
//         // need to do something in here to feed jquery? 
//         // or handlebars? 
//     }).then(function(dbPatients) {
//         // console.log(dbPatients);
//         console.log("server .get promise");
//         console.log(dbPatients);
//         res.render("patients", { patient_db: dbPatients });
//         next();
//     });
// });

// // nurse page 
// app.get('/nurses', function(req, res) {
//     res.render('nurses');
//     console.log("nurse please!");
// });

// // schedule page 
// app.get('/schedule', function(req, res) {
//     res.render('schedule');
//     console.log("schedule please!");
// });

// PASSPORT.JS CODE 🔑🔑 
/*=====================================================================================*/
/*var passport = require('passport')
var session = require('express-session')
var env = require('dotenv').load();
var authRoute = require('./routes/auth.js')(app, passport);
var models = require("./models");

app.use(session({ secret: 'medi', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

//load passport strategies.
require('../server/config/passport.js')(passport, models.user);*/

/*=====================================================================================*/
// END OF PASSPORT.JS CODE 🔑🔑 


// // Syncing our sequelize models and then starting our Express app
// // // =============================================================
// db.sequelize.sync().then(function() {
//     app.listen(PORT, function() {
//         console.log("App listening on PORT " + PORT);
//     });
// });