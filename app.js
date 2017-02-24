var express = require("express");

var app = express();

var port  = process.env.PORT || 3000;

var router = express.Router();

router.route('/posts')
    .get(function (req, res) {
        var responseJson = {hello: "My API"};

        res.json(responseJson);
    });


app.use('/api', router);

app.get('/', function (req, res) {
   res.send('Welcome to my API');
});

app.listen(port, function () {
    console.log('Gulp is running on port: '+port);
});