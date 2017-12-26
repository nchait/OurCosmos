var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bears', { useMongoClient : true });
var Bear        = require('./app/models/bear');
var User        = require('./app/models/user');
var Collection  = require('./app/models/collection');
var Rating      = require('./app/models/rating');
var Document    = require('./app/models/document');
var Dmca        = require('./app/models/dmca');
var request     = require('request');
var nodemailer  = require('nodemailer');
var bcrypt      = require ('bcrypt');
var auth        = require('express-jwt-token');
var jwt         = require('jsonwebtoken');
var sanitizeHtml= require('sanitize-html');
var cors        = require('cors')
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const secretKey = 'noah is awesome';
/*
my route
post(users) - sign up
get(users) - get all users
post(users/signin) - request jwt
get(/users/verify/:user_id) - verify user
get(/nasa/search/:searchTerms) - search with query
get(/nasa/search/) - no query search
get(/users/cookie/:user_id) check if my cookie is valid
delete('/collections/:id') delete collection
post('/collections/:id') add to a collection
get('/collections/:id') get a users collections
post('/collections') add a collection
get('/collections') get public collections
put('/collections') edit my collections attributs or delete a picture from them
post('/collections/rating') post a new rating or replace an old one
get('/document') get the docs weve saved
post('/document') change a doc
get('/dmca') get the disabled collections
get('/dmca/:id') report a dmca invalid collection
delete('/dmca/:id') restore dmca to null



message codes
200         success
201         you've been signed out
204         sign up invalid username choice
208         sign upinvalid 
210         sign in email invalid
211         sign in password invalid
212         sign in not verified
220         collection name taken
221         no collections found
222         error adding to collection
223         Collection name taken for update
230         rating replaced

my functions                        description                     
checkUsername()                     is username taken?                          
checkemail()                        is email taken?
encrypt password()                  encrypt password
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
    User.find({ 'username': req.body.username }, function (err, docs) {//check if the sign up username is taken
        if(docs[0]!=null){
            res.json({message: 204});
            return;
        }
        checkEmail(req, res);//call email
    });
}
function checkEmail(req, res){
    console.log('checking email');
    User.find({ 'email': req.body.email }, function (err, docs) {//check if the sign up email is taken
        if(docs[0]!=null){
            res.json({message: 208});
            return;
        }
        encryptPass(req, res);//all good, encrypt password
    });
}
function encryptPass(req, res){
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        console.log(err);
        bcrypt.hash(req.body.password, salt, function(err, hash) {//bcrypt hashing
            req.body.password = hash;  // set the users password (comes from the request)
            //console.log(hash);
            console.log(err);
            saveUser(req, res); //commit to memory
        });
    });
}
function saveUser(req, res){//everything went through now save
    console.log('saving user');
    var user = new User();      // create a new instance of the User model
    user.username = sanitizeHtml(req.body.username);  // set the users username (comes from the request)
    user.email = sanitizeHtml(req.body.email);  // set the users email (comes from the request)
    user.password = sanitizeHtml(req.body.password);  // set the users email (comes from the request)
    user.verification = createRandomSequence();// function call
    user.save(function(err) {
        if (err)
            res.send(err);  
        sendVerification(user.email, user.verification);//send an email with verification
    });
    res.json({message: 200});
    
}
function createRandomSequence() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";//possible inputs

  for (var i = 0; i < 20; i++)//20 character sequence to make almost sure no two are the same
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function sendVerification(email, verification){//verification email sending function
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'OurCosmosSE3316@gmail.com',//made this email for the project to serve as admin
        pass: 'Angular2'//DO NOT CHANGE
      }
    });
    console.log(verification);
    var link = "https://lab05-nchait.c9users.io:8081/api/users/verify/"+verification;//set the verification link
    var body= "Welcome to The Cosmos, the best place to view NASAs collection of astounding pictures. use the following link to verify yourself "+ link+".";//set email body
    var mailOptions = {
      from: 'OurCosmosSE3316@gmail.com',
      to: email,//passed to function
      subject: 'Welcome To The Cosmos! Verify Yourself',
      text: body
    };
    
    transporter.sendMail(mailOptions, function(error, info){//actually send it
      if (error) {
        console.log(error);
      } else {
        //console.log('Email sent: ' + info.response);
      }
    });
}
router.route('/users')

    .post(function(req, res) {
        checkUsername(req,res);//start the sign up process, scoroll up
    })
    ////////////////////////////////////////////////////////get all users///////////////////////////////////////////////////////
    .get(function(req, res) {//this is not accessible through the app and is made for the postman app and administration
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

    .post(function(req, res) {//attempt sign in. stacked to show sequence of events
        console.log(req.body.email);
        User.find({ 'email': req.body.email }, function (err, docs) {
            console.log(docs)
            if(docs.length==1 && docs[0].verification==1){//see the else statement for an explanaition but this assumes the email was valid and is verified
                const saltRounds = 10;
                bcrypt.genSalt(saltRounds, function(err, salt) {
                    //console.log(err);
                    bcrypt.compare(req.body.password, docs[0].password, function(err, resp) {//hash the password and compare
                        var adminStatus = isAdmin(docs[0].username);//is this the admin
                        var newCookie = createRandomSequence();//create a cookie value on sign in. same 20 letter sequence as verification
                        docs[0].cookie=newCookie;
                        console.log(docs[0]);
                        docs[0].save(function(err) {//commit cookie to memory
                            if (err)
                                res.send(err);
                            if(resp){
                                    return res.json({//successful sign in, send the following back
                                        cookie: newCookie,
                                        message: 200,//success
                                        admin: adminStatus,//didnt end up using
                                        username: docs[0].username,//if admin then it is admin 
                                        id: docs[0]._id//used for cookie
                                    });
                            }else{
                                res.json({message: 211});//incorrect password
                                return;
                            }
                        });
                    });
                });
            }else if(docs.length==0){
                res.json({message: 210});//email invalid
                return;
            }else if(docs.length==1){
                if(docs[0].verification!=1){
                    res.json({message: 212});//not verified
                    return; 
                }
            }

        });
    });
    

    var nasaUrl = 'https://images-api.nasa.gov/search?media_type=image&q='//only get images
    var myUrl=null;
router.route('/nasa/search/')//general search

    .get(function(req, res) {
        request({
               url: nasaUrl,
               json: true
            },function (error, response, body) {
                if (!error && response.statusCode==200){
                    res.json({'body': response.body});//send back search findings
                }else{
                    console.log('error:', error); // Print the error if one occurred
                    res.json({ 'status code': response.statusCode });//return error
                }
        });
    });
router.route('/nasa/search/:searchTerms')//specified search
    .get(function(req, res) {
        myUrl = encodeURIComponent(req.params.searchTerms);//encode url because it probably contains spaces
        myUrl=nasaUrl+myUrl;//concatinate requests
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
        User.find({ 'verification': req.params.user_id }, function (err, docs) {/* used for link from verification. the id passed is their
                                                                                   verification code. thats why it needs to be unique.*/
            if (err)
                res.send(err);
            verifyUser(docs[0]._id, res);//function call
        });
    });
function verifyUser(id, res){
    User.findById(id, function(err, user) {
        if (err)
            res.send(err);
        user.verification = 1;//verified is 1
        user.save(function(err) {
            if (err)
                res.send(err);
            res.json('you have been verified! follow this link to sign in http://localhost:8080/signin');//point them to sign in
        });
    });
}
router.route('/users/cookie/:user_id')
    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        var theParams=String(req.params.user_id).split('&');//first half id second the cookie
        User.findById(theParams[0], function(err, user) {//given a user
            if (err)
                return res.send(err);
            if (theParams[1]==user.cookie){//is this the current cookie
                return res.json({
                    message: 200,
                    username: user.username
                });
            }else {
                return res.json({message: 201})//make them signn out
            }
        });
    });
router.route('/users/:user_id')
    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {//get a user givern the id
            if (err)
                res.send(err);
            res.json(user);
        });
    });/*
    .put(function(req, res) {// use our user model to find the user we want
        User.findById(req.params.user_id, function(err, user) {//not used in the app to my knowledge but maybe in future implementations
            if (err)
                res.send(err);
            user.username = sanitizeHtml(req.body.username);  // update the users info
            user.password = sanitizeHtml(req.body.password);  // update the users info
            user.email = sanitizeHtml(req.body.email);  // set the users password (comes from the request)
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
    });//*/
router.route('/collections')
    .get(function(req, res) {//get public collections that havent been reported
        Collection.find({'open': true, 'disabled':false}, function(err, collections) {
            if (err)
                res.send(err);
            res.json(collections);
        });
    })
    .put(function(req, res) {
        console.log(req.body);//edit a collections aspects
        Collection.find({'name': sanitizeHtml(req.body.doc.name)}, function(err, doc) {
            if (err)
                res.send(err);
            console.log('update collection doc: ' + doc.length);
            if (doc.length>0){
                if (doc.length!=1 || doc[0]._id!=req.body.doc._id){
                    res.json({message: 223});
                    return;
                }    
            }
            Collection.findById(req.body.doc._id, function(err, collection) {
                if (err)
                    res.send(err);
                collection.descrip = sanitizeHtml(req.body.doc.descrip);
                collection.name = sanitizeHtml(req.body.doc.name);
                collection.open = sanitizeHtml(req.body.doc.open);
                collection.save(function(err) {
                if (err)
                    res.send(err);  
                });
                res.json({message: 200});
            });//*/
        });
    })
    .post(function(req, res) {//create a new collection
        console.log('checking Collection Name');
        Collection.find({ 'name': req.body.name, 'disabled':false}, function (err, docs) {
            if(docs[0]!=null){
                res.json({message: 220});//name was taken
                return;
            }
            var collection = new Collection();      // create a new collection
            collection.name = sanitizeHtml(req.body.name);
            collection.descrip = sanitizeHtml(req.body.descrip);
            collection.open = req.body.open;
            collection.pictures = [req.body.picture];
            collection.publicRating = 0;//default rating - rates can only be 1-10 so this is easy to know its not set
            collection.creator = req.body.creator;
            collection.disabled = false;
            console.log(collection);
            collection.save(function(err) {
            if (err)
                res.send(err);  
            });
            res.json({message: 200});
        });
    });
router.route('/collections/:id')
    .delete(function(req, res) {//delete a collection using the id
        Collection.remove({
            _id: req.params.id
        }, function(err, collection) {
            if (err)
                res.send(err);

            res.json({ message: 200 });
        });
    })
    .get(function(req, res) {//get collections made by a user
        Collection.find({ 'creator': req.params.id, 'disabled':false}, function (err, docs) {
            if(docs[0]==null){
                res.json({message: 221});
                return;
            }
            res.json({message: 200,
                body: docs
            });
        });
    })
    .put(function(req, res) {//for admin and postman- get all collections
        Collection.find(function(err, collections) {
            if (err)
                res.send(err);
            res.json(collections);
        });
    })
    .post(function(req, res) { // add to collection
        console.log(req);
        Collection.findById(req.body.doc._id, function(err, coll) {
            if(coll==null){
                res.json({message: 222});//error, no collection found
                return;
            }
            coll.pictures = req.body.doc.pictures;//pre added
            coll.save(function(err) {
            if (err)
                res.send(err);  
            });
            res.json({message: 200});
        });//*/
    });
router.route('/rating/')
    .put(function(req, res) {//get all ratings - for postman
        Rating.find(function(err, ratings) {
            if (err)
                res.send(err);
            res.json(ratings);
        });
    })
    .post(function(req, res) {//post a rating
        //console.log(req.body);//collId, userId, val
        Rating.find({ 
                            'collectionId': req.body.collId,
                            'userId': req.body.userId//check if the user has rated that collection
                                }, function (err, docs) {
            console.log(docs);
            if(docs[0]==undefined){//if not:
                var rating = new Rating();      // create a new instance of the User model
                rating.collectionId = req.body.collId;
                rating.userId = req.body.userId;
                rating.rate = req.body.rate;
                console.log(rating);
                rating.save(function(err) {
                if (err)
                    res.send(err);  
                    updateRating(req.body.collId);

                });
                res.json({message: 200});
                return;
            }//if so, replace the rating value*/
            console.log(docs[0]);
            docs[0].rate = req.body.rate;
            docs[0].save(function(err) {
            if (err)
                res.send(err); 
                updateRating(req.body.collId);
            });
            res.json({message: 230});//*/

            });
    })
    .delete(function(req, res) {//delete a rating, only for postman
    console.log(req);
        Rating.remove({_id: req.body.id}, function(err, collection) {
            if (err)
                res.send(err);
            res.json({ message: 200 });
        });
    });
function updateRating(collId){//recalculate average rating
    console.log('check');
    Rating.find({'collectionId': collId}, function (err, docs) {//find all ratings for a collection
        var sum=0;
        for (var i = 0; i < docs.length; i++){
            sum+=docs[i].rate;//sum all ratings
        }
        
        Collection.findById(collId,function (err, coll) {//update the collection internally
            console.log(sum);
            console.log(docs.length);
            coll.publicRating=String(sum/docs.length);//average in line
            console.log(coll.publicRating);
            coll.save(function(err) {
            });
        });
    });

}
router.route('/document')
    .post(function(req, res) {//edit a document
        Document.findById(req.body.id, function(err, doc) {
        if (err)
            res.send(err);
        doc.info = sanitizeHtml(req.body.words);
        
            doc.save(function(err) {
                if (err)
                    res.send(err); 
                res.json({message:200});
            });
        });
    })

    .get(function(req, res) {
        Document.find(function(err, users) {//get a document
            if (err)
                res.send(err);
            res.json(users);
        });
    });

//*
router.route('/dmca')
    .get(function(req, res) {
        Collection.find({'disabled': 'dmca'}, function(err, collectionsA) {//get collections with takedown notice
            if (err)
                res.send(err);
            return res.json({ message : 200, body: collectionsA})
        });
    })

router.route('/dmca/:id')
    .get(function(req, res) {
        console.log(req.params.id);
        Collection.findById(req.params.id, function(err, collection) {//create a takedown notice
            if (err)
                return res.send(err);
            sendEmailFromCollection(collection.name,false);//send them an email
            collection.disabled = 'dmca';//disable the collection
            collection.save(function(err2) {
                if (err2)
                    return res.send(err2); 
                return res.json({message:200});
            });
        });
    })
    .delete(function(req, res) {
        console.log(req.params.id);
        Collection.findById(req.params.id, function(err, collection) {//delete a notice, restore collection
            if (err)
                return res.send(err);
            collection.disabled = false;
            collection.save(function(err2) {
                if (err2)
                    return res.send(err2); 
                return res.json({message:200});
            });
        });
    });
function sendEmailFromCollection(name,deleted){//send an email given a collection name
    Collection.find({'name': name}, function(err, collections) {//find the collection
        if (err)
            res.send(err);
        User.find({'username': collections[0].creator}, function(err, user) {//find the user id and email
            if (err)
                res.send(err);
            console.log(user);
            console.log('email '+user[0].email);
            sendDMCA(user[0].email, deleted);
        });
    });
}
function sendDMCA(email, deleted){//send the email
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'OurCosmosSE3316@gmail.com',
        pass: 'Angular2'
      }
    });
    var sub;
    var body;
    if (deleted){//different emails for whether or not it was deleted
        body = "your collection was deleted. either by you or the administrator for infringement or offensive material.";
        sub = 'Collection Deleted - Our Cosmos';
    }else{//basically a warning
        body = "a collection of yours has been reported. respond to this email within 14 days to dispute the claim.";
        sub = 'Collection Reported - Our Cosmos';
    }
    var mailOptions = {
      from: 'OurCosmosSE3316@gmail.com',
      to: email,
      subject: sub,
      text: body
    };
    //console.log(email);
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
app.use('/api', router);


app.listen(port);
console.log('Server is running on port ' + port)