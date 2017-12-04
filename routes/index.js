
/*
 * GET home page.
 */
var mysql = require('./mysql');


exports.index = function(req, res){
	var bgName = req.param.backgroundName;
	console.log("Background: "+bgName);
	var queryToChangeBackground = "UPDATE `config_params` SET `value`='1' WHERE `inputkey`='background_image'";
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

exports.moveaside = function(req, res){
	var queryToAlignText = "UPDATE `config_params` SET `value`='1' WHERE `inputkey`='text_align'";
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated");
					
					res.send("Success");
				}
				
			}, queryToAlignText);
	
};

exports.changefont = function(req, res){
	var queryToUpdateFont = "UPDATE `config_params` SET `value`='1' WHERE `inputkey`='text_font'";
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated");
					
					res.send("Success");
				}
				
			}, queryToUpdateFont);
	
};

exports.changetextsize = function(req, res){
	var queryToChangeFontSize = "UPDATE `config_params` SET `value`='1' WHERE `inputkey`='font_size'";
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated");
					
					res.send("Success");
				}
				
			}, queryToChangeFontSize);
	
};

exports.changetext = function(req, res){
	var queryToChangeText = "UPDATE `config_params` SET `value`='1' WHERE `inputkey`='text'";
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated");
					
					res.send("Success");
				}
				
			}, queryToChangeText);
	
};

exports.changetextstyle = function(req, res){
	var queryToChangeTextStyle = "UPDATE `config_params` SET `value`='1' WHERE `inputkey`='font_style'";
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated");
					
					res.send("Success");
				}
				
			}, queryToChangeTextStyle);
	
};

exports.changecolor = function(req, res){
	var queryToChangeColor = "UPDATE `config_params` SET `value`='1' WHERE `inputkey`='font_color'";
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated");
					
					res.send("Success");
				}
				
			}, queryToChangeColor);
	
};


exports.dashboard = function(req, res){
	var queryToChangeBackground = "select url from background_image where id=(select value from config_params where inputkey='background_image') ";	
	mysql.fetchData(
			function(err, results) {
				if (err) {
					console.log(err);
					throw err;
				} else {
					console.log("Updated: "+JSON.stringify(results));
					console.log("came",results[0].url);
					res.render('alexa_team', {'url': results[0].url});
				}
				
			}, queryToChangeBackground);
	
	
	
};