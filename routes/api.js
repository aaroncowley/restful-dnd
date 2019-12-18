var express = require('express');
var router = express.Router();
var char_controller = require("../controllers/character");
const db = require("../db");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({"message":"api routes are " +
            "/api/upload to upload a char sheet, " +
            "/api/:firstname_lastname to request filled out char sheet," +
            "/api/:id to request by id"});
});

router.post('/upload', function(req, res){
    console.log('in upload');
    char_controller.characterCreate(req, res);
});

router.post("/:charname", function(req, res){
    console.log(req.params.charname);
    char_controller.characterRead(req, res);
});
module.exports = router;