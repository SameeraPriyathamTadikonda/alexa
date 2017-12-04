
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/dashboard', routes.dashboard);
app.get('/users', user.list);
app.get('/moveaside', routes.moveaside);
app.get('/changefont', routes.changefont);
app.get('/changetextsize', routes.changetextsize);
app.get('/changetext', routes.changetext);
app.get('/changetextstyle', routes.changetextstyle);
app.get('/changecolor', routes.changecolor);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
