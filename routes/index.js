/*
 * GET home page.
 */
var mysql = require('./mysql');
exports.index = function(req, res) {
	console.log("success");
	res.send("success");

};

exports.changebackground = function(req, res) {
	var bgName = req.param('backgroundName');
	console.log("Background: " + bgName);
	var queryToChangeBackground = "UPDATE `config_params` SET `url`='" + bgName+"'";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log(err);
			throw err;
		} else {
			console.log("Updated");

			res.send("Success");
		}

	}, queryToChangeBackground);

};

exports.moveaside = function(req, res) {
	var textAlign = req.param('direction');
	console.log("Text Align: " + textAlign);
	var queryToAlignText = "UPDATE `config_params` SET `align`='" + textAlign+"'";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log(err);
			throw err;
		} else {
			console.log("Updated");

			res.send("Success");
		}

	}, queryToAlignText);

};

exports.hidetable = function(req, res) {

	var visibility = req.param('visibility');
	console.log("Visibility: " + visibility);
	var queryToUpdateVisibility = "UPDATE `config_params` SET `visibility`='"+ visibility+"'";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log(err);
			throw err;
		} else {
			console.log("Updated");

			res.send("Success");
		}

	}, queryToUpdateVisibility);

};

exports.changetext = function(req, res) {
	var text = req.param('text');
	console.log("Visibility: " + text);
	var queryToChangeText = "UPDATE `config_params` SET `text`='" + text+"'";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log(err);
			throw err;
		} else {
			console.log("Updated");

			res.send("Success");
		}

	}, queryToChangeText);

};

exports.changeimage = function(req, res) {
	var name = req.param('name');
	console.log("Name: " + name);
	var queryToChangeColor = "UPDATE `config_params` SET '" + name+ "' CASE WHEN '" + name + "'=1 THEN 2 ELSE 1 END";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log(err);
			throw err;
		} else {
			console.log("Updated");

			res.send("Success");
		}

	}, queryToChangeColor);

};

exports.dashboard = function(req, res) {
	var queryToChangeBackground = "select * from config_params where id=1";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log(err);
			throw err;
		} else {
			console.log("Updated: " + JSON.stringify(results));
			console.log("came", results[0].url);
			res.render('alexa_team', {
				'url' : results[0].url,
				'align' : results[0].align,
				'visibility' : results[0].visibility,
				'text' : results[0].text,
				'ankita' : results[0].ankita,
				'priyatham' : results[0].priyatham,
				'pratheeksha' : results[0].pratheeksha,
				'abinethri' : results[0].abinethri
			});
		}

	}, queryToChangeBackground);

};