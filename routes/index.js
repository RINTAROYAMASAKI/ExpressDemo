var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'BCtuner' });
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    //console.log(title);
    console.log(createdAt);
    var id = 111;
    var query = 'INSERT INTO user (id, username, email, password) VALUES ("' + id + '", ' + '"' + username + '", ' + '"' + email + '", ' + '"' + password + '")';
    connection.query(query, function(err, rows) {
        res.redirect('/');
    });
});

module.exports = router;