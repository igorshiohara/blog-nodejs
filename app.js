var express = require("express"),
    mongoose = require("mongoose");

var db = mongoose.connect('mongodb://localhost/blog');

var post = require('./model/post');
var app = express();

var port  = process.env.PORT || 3000;

var router = express.Router();

router.route('/posts')
    .get(function (req, res) {
        post.find(function (err, posts) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(posts);
            }
        })
        res.json(responseJson);
    });


app.use('/api', router);

app.get('/', function (req, res) {
   res.send('Welcome to my API');
});

app.listen(port, function () {
    console.log('Gulp is running on port: '+port);
});