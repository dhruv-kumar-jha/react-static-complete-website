'use strict';

const express = require('express');
const app = express();
const path = require('path');

// specify the port where you want this server to be available at
app.set( 'port', process.env.PORT || 1001 );

// make the entire contents of public directory accessible
app.use( express.static(
	path.join(__dirname, '../', 'public'),
	{
		// index: false, // don't look for index.html files in sub directories.
		extensions:['html']
	})
);


// for every request made, if the file doesn't exist, return 200.html file.
app.get( '/*', (req, res) => {
	res.sendFile( path.join(__dirname, '../', 'public', '200.html') );
});

app.listen( app.get('port'), function () {
	console.log('Server running at http://localhost:%s', app.get('port'));
});

