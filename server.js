var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bears', { useMongoClient : true });
var Bear        = require('./app/models/bear');
var User        = require('./app/models/user');
var Collection  = require('./app/models/collection')
var request     = require('request');
var nodemailer  = require('nodemailer');
var bcrypt      = require ('bcrypt');
var auth        = require('express-jwt-token');
var jwt         = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const secretKey = 'noah is awesome';
/*
my route
post(api/users) - sign up
get(api/users) - get all users
post(api/users/signin) - request jwt
get(api//users/verify/:user_id) - verify user
get(/nasa/search/:searchTerms) - search with query
get(/nasa/search/) - no query search
get(/users/cookie/:user_id) check if my cookie is valid

message codes
200         success
201         you've been signed out
204         sign up invalid username choice
208         sign upinvalid 
210         sign in email invalid
211         sign in password invalid
212         sign in not verified

my functions                        description                     
checkUsername()                     is username taken?                          
checkemail()                         is email taken?
encrypt password()                    encrypt password
saveuser()
post(api/users)                     sign up
get(api/users)                      get all users
post(api/users/signin)              request jwt
get(api//users/verify/:user_id)     verify user
get(/nasa/search/:searchTerms)      search with query
get(/nasa/search/)                  no query search
get(/users/cookie/:user_id)         check if my cookie is valid
*/

// Start server on port 8081
// It is important to start Node on a different port
var port = 8081;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening');
    next();
});

// GET request to /api returns { message: 'Hello World' }
// In my C9 account the request must be sent to https://node-angular-lgobinath.c9users.io:8081/api
router.get('/', function(req, res) {
    res.json({ message: 'Hello World' });
});
////////////////////////////////////////////////sign up/////////////////////////////////////////////////////////
function checkUsername(req, res){//step 2
    console.log('checking username');
    User.find({ 'username': req.body.username }, function (err, docs) {
        if(docs[0]!=null){
            res.json({message: 204});
            return;
        }
        checkEmail(req, res);
        
    });
    
}
function checkEmail(req, res){
    console.log('checking email');
    User.find({ 'email': req.body.email }, function (err, docs) {
        if(docs[0]!=null){
            res.json({message: 208});
            return;
        }
        encryptPass(req, res);
    });
}
function encryptPass(req, res){
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        console.log(err);
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            req.body.password = hash;  // set the users password (comes from the request)
            console.log(hash);
            console.log(err);
            saveUser(req, res);
        });
    });
}
function saveUser(req, res){
    console.log('saving user');
    var user = new User();      // create a new instance of the User model
    user.username = req.body.username;  // set the users username (comes from the request)
    user.email = req.body.email;  // set the users email (comes from the request)
    user.password = req.body.password;  // set the users email (comes from the request)
    user.verification = makeVerification();
    user.save(function(err) {
        if (err)
            res.send(err);  
        sendVerification(user.email, user.verification);
    });
    res.json({message: 200});
    
}
function makeVerification() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function sendVerification(email, verification){
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'OurCosmosSE3316@gmail.com',
        pass: 'Angular2'
      }
    });
    var link = "https://lab05-nchait.c9users.io:8081/api/users/verify/"+verification;
    var body= "Welcome to The Cosmos, the best place to view NASAs collection of astounding pictures. use the following link to verify yourself "+ link+".";
    var mailOptions = {
      from: 'OurCosmosSE3316@gmail.com',
      to: email,
      subject: 'Welcome To The Cosmos! Verify Yourself',
      text: body
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        //console.log(error);
      } else {
        //console.log('Email sent: ' + info.response);
      }
    });
}
router.route('/users')

    .post(function(req, res) {
        checkUsername(req,res);//step 1
    })
    ////////////////////////////////////////////////////////get all users///////////////////////////////////////////////////////
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });
function isAdmin(username){
    if (username=='admin'){
        return true;
    } else {
        return false;
    }
}
router.route('/users/signin')

    .post(function(req, res) {
        User.find({ 'email': req.body.email }, function (err, docs) {
            if(docs.length==1 && docs[0].verification==1){
                const saltRounds = 10;
                bcrypt.genSalt(saltRounds, function(err, salt) {
                    //console.log(err);
                    bcrypt.compare(req.body.password, docs[0].password, function(err, resp) {
                        var adminStatus = isAdmin(docs[0].username);
                        var newCookie = makeVerification();
                        docs[0].cookie=newCookie;
                        console.log(docs[0]);
                        docs[0].save(function(err) {
                            if (err)
                                res.send(err);
                            if(resp){
                                    return res.json({
                                        cookie: newCookie,
                                        message: 200,
                                        admin: adminStatus,
                                        username: docs[0].username,
                                        id: docs[0]._id
                                    });
                            }else{
                                res.json({message: 211});//incorrect password
                                return;
                            }
                        });
                    });
                });
            }else{
                if(docs[0].verification==1){
                    res.json({message: 212});//username not found
                    return; 
                }
                res.json({message: 210});//username not found
                return;
            }
        });
    });
    

    var nasaUrl = 'https://images-api.nasa.gov/search?media_type=image&q='
    var myUrl=null;
router.route('/nasa/search/')

    .get(function(req, res) {
        request({
               url: nasaUrl,
               json: true
            },function (error, response, body) {
                if (!error && response.statusCode==200){
                    res.json({'body': response.body});
                }else{
                    //console.log('error:', error); // Print the error if one occurred
                    res.json({ 'status code': response.statusCode });
                }
        });
    });
router.route('/nasa/search/:searchTerms')

    // create a bear (accessed at POST http://localhost:8080/api/bears)

    .get(function(req, res) {
//        for (var i = 0;i<req.params.searchTerms)
        myUrl = encodeURIComponent(req.params.searchTerms);
        //console.log(myUrl);
        myUrl=nasaUrl+myUrl;
        //console.log(myUrl);
        request({
               url: myUrl,
               json: true
            },function (error, response, body) {
                if (!error && response.statusCode==200){
                    res.json({'body': response.body});
                }else{
                    //console.log('error:', error); // Print the error if one occurred
                    res.json({ 'status code': response.statusCode });
                }
        });
    });

router.route('/users/verify/:user_id')
    .get(function(req, res) {
        //console.log(req.params.user_id);
        // use our user model to find the user we want
        User.find({ 'verification': req.params.user_id }, function (err, docs) {
            if (err)
                res.send(err);
            //console.log(docs[0]);
            verifyUser(docs[0]._id, res);
        });
    });
function verifyUser(id, res){
    //console.log("going");
    User.findById(id, function(err, user) {
        if (err)
            res.send(err);
        user.verification = 1
        user.save(function(err) {
            if (err)
                res.send(err);
            res.json('you have been verified! follow this link to sign in http://localhost:8080/signin');
        });
    });
}
router.route('/users/cookie/:user_id')
    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        var theParams=String(req.params.user_id).split('&');
        User.findById(theParams[0], function(err, user) {
            if (err)
                return res.send(err);
            if (theParams[1]==user.cookie){
                return res.json({
                    message: 200,
                    username: user.username
                });
            }else {
                return res.json({message: 201})
            }
        });
    });
router.route('/users/:user_id')
    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })
    .put(function(req, res) {

        // use our user model to find the user we want
        User.findById(req.params.user_id, function(err, user) {

            if (err)
                res.send(err);

            user.username = req.body.username;  // update the users info
            user.password = req.body.password;  // update the users info
            user.email = req.body.email;  // set the users password (comes from the request)


            // save the user
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    })
    
    .delete(function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

app.use('/api', router);


app.listen(port);
console.log('Server is running on port ' + port)