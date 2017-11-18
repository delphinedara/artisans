// based on various parameters (is it an existing user authorized to travel about the site )
//  in other files this directs the application to render certain pages as a response. 
// names and certain details need to be changed. 



var exports = module.exports = {}


exports.signup = function(req, res) {

    res.render('index');

}

exports.signin = function(req, res) {

    res.render('signin');

}

exports.dashboard = function(req, res) {

    res.render('/schedule');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {
        res.redirect('/');
    });
}