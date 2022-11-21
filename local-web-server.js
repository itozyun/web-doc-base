// https://maku77.github.io/nodejs/express/static-file.html
const express = require('express'),
      app     = express(),
      isDebug = process.argv[2] === '--DEBUG';

app.set('port', process.env.PORT || 8024);

app.use( function( req, res, next ){
    console.log( req.path );
    // TODO timeout, lazy
    if( req.path.startsWith( '/test/' ) || req.path.startsWith( '/assets/' ) ){
        res.sendFile( __dirname + '/docs' + req.path );
    } else {
        res.sendFile( __dirname + ( isDebug ? '/docs.debug' : '/docs' ) + req.path );
    };
} );

app.listen( app.get( 'port' ), function(){
    console.log( 'Listening on port ' + app.get( 'port' ) );
});