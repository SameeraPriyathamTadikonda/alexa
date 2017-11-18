
/*
 * GET home page.
 */
var mysql = require('./mysql');
var queryToChangeBackground = "UPDATE `config_params` SET `value`='1' WHERE `inputkey`='background_image'";

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
	var queryToChangeBackground = "select url from background_image where id=(select value from config_params where inputkey='background_image') ";	
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated: "+JSON.stringify(results));
					
					res.render('index', {'url': results[0].url});
				}
				
			}, queryToChangeBackground);
	
	
	
};