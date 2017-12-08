const express = require( 'express' ),
         path = require( 'path' ),
      favicon = require( 'serve-favicon' ),
       logger = require( 'morgan' ),
 cookieParser = require( 'cookie-parser' ),
   bodyParser = require( 'body-parser' );

const routeMain = require( './server/route/index' );
//      routeUser = require( './server/route/user' );

const app = express();

// view engine setup
// app.set( 'views', path.join( __dirname, 'views' ) );
// app.set( 'view engine', 'html' );

// uncomment after placing your favicon in /public
//app.use( favicon( path.join( __dirname, 'public', 'favicon.ico' ) ) );
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, 'client' ) ) );

app.use( '/', routeMain );
// app.use('/user', routeUser );

// catch 404 and forward to error handler
app.use( (req, res, next ) => {
  var err = new Error( 'Not Found' );
  err.status = 404;
  next( err );
});

// error handlers

// development error handler
// will print stacktrace
if( app.get( 'env' ) === 'development' ) {
  app.use( ( err, req, res, next ) => {
    res.status( err.status || 500 );
    res.json( {
      message: err.message,
      error: err
    } );
  } );
}

// production error handler
// no stacktraces leaked to user
app.use( ( err, req, res, next ) => {
  res.status( err.status || 500 );
  res.json( {
    message: err.message,
    error: {}
  } );
} );


module.exports = app;
