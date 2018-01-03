var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
mongoose.connect('mongodb://localhost:27017/simple-stories');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var UserModel = require('./models/userModel');
var StorieModel = require('./models/storieModel');

passport.use(new Strategy(
    function(username, password, cb) {
        UserModel.findOne({ userEmail: username }, function(err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (user.userPassword != password) { return cb(null, false); }
            return cb(null, user);
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
});
  
passport.deserializeUser(function(id, cb) {
    UserModel.findOne({ _id: id }, function(err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});
  
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.post('/api/login',
    passport.authenticate('local'),
    function (req, res) {
        res.json({
            "user": req.user,
        })
    }
);

app.get('/api/auth', function (req, res) {
    res.json({
        "user": req.user
    })
});

app.get('/api/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.json("Logout successfully")
    })
});

app.post('/api/create-account', function (req, res) {
    UserModel.findOne({ userEmail: req.body.email }, function(err, user) {
        if(user){
            res.json('Email already registerd.');
        } else {
            var user = new UserModel({
                userName: req.body.name,
                userEmail: req.body.email,
                userPassword: req.body.password,
            });
            user.save(function(error, user){
                if(error) return console.error(error);
                res.json('User created successfully.');
            })
        }
    });
});

app.get('/api/stories', function (req, res) {
    StorieModel.find().exec(function(error, stories){
        if(error) return console.error(error);
        res.json({
            "stories": stories
        })
    })
});

app.get('/api/storie/:slug', function (req, res) {
    StorieModel.findOne({ storieSlug: req.params.slug }, function(err, storie) {
        if(storie){
            res.json({
                "storie": storie
            })
        }
    });
});

app.get('/api/create-storie',
    function(req, res){
        res.json({
            "user": req.user
        })
    }
);

app.post('/api/create-storie', function(req, res){
    StorieModel.findOne({ storieSlug: req.body.storieSlug }, function(err, storie) {
        let newStorieSlug = req.body.storieSlug;
        if(storie){
            newStorieSlug = req.body.storieSlug + Math.floor((Math.random() * 100) + 1);
        }
        var storie = new StorieModel({
            storieSlug: newStorieSlug,
            storieTitle: req.body.storieTitle,
            storieCover: 'cover' + Math.floor((Math.random() * 10) + 1) + '.jpg',
            storieAuthor: req.body.storieAuthor,
            storieText: req.body.storieText
        });
        storie.save(function(error, storie){
            if(error) return console.error(error);
            res.json('Storie created.');
        })
    });
});

app.listen(3001, function () {
    console.log('Server running on port 3001');
});