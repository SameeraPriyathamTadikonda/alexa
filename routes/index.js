
/*
 * GET home page.
 */
var mysql = require('./mysql');
var queryToChangeBackground = "UPDATE `config_params` SET `value`='4' WHERE `key`='background_image'";

exports.index = function(req, res){
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated");
					
					res.send("Success");
				}
				
			}, queryToChangeBackground);
	
};

exports.index12 = function(req, res){
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated");
					
					res.send("Success");
				}
				
			}, queryToChangeBackground);
	
};