// Server

var express = require('express');
var app = express();
var mongoose = require('mongoose');

// __dirname
// express server -----------
app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Database connection -------
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection est:')
});

/* Mongoose speific code 
	Creating schema
*/
var Schema = mongoose.Schema;
var watchSchema = new Schema({
  id: String,
  rent: String,
  star: String
},
{strict: false});


watchSchema.post('save', function (doc) {
  console.log('this fired after a document was saved');
});

var watchCollection = mongoose.model('watches', watchSchema); // watches is collection

mongoose.connect('mongodb://localhost/watch'); // watch is db

app.get('/api/getWatchByPrice/:price', function(req, res) {
  
  var pprice1 = req.params.price;
  var pprice2 = pprice1 + 100;
  watchCollection.find({
		price: {
            $gt: pprice1,
            $lt: pprice2

        }
    }, function (err, watchList) {
        if (err) {
            console.log("err -->", err.stack);
        } else {
			console.log(res + "  response from database of that price");
        	res.json(watchList);
        }

    });
});

app.get('/api/getAllWatches', function(req, res) {
	console.log("get all Watches -->");
		watchCollection.find({}, function (err, watchList) {
	  
	  		if (err) { 
	  			console.log("err -->", err); 
				res.send(err);
  			}else{
  				console.log(res + "  response from database");
  				res.json(watchList);	
  			}
	  		
		});
});

app.get('/api/getWatches/:wid', function(req, res) {
	console.log("get Watch with param -->", req.params.wid);
		var pColor = req.params.wid;
 		watchCollection.find({color: pColor}, function (err, watchList) {
	  
	  		if (err) { 
	  			console.log("err -->", err); 
				res.send(err);
  			}
  			console.log(res + "  response from database of that color");
	  		res.json(watchList);
		});

    });



 app.post('/api/insertWatches', function(req, res) {
	console.log("insert Watches -->");
 		var newM = new watchCollection({id: 4, cost: 800, category: "women", 
 									brand: "tag", color: "red", size: "7"});
 		newM.save( function (err) {
	  
	  		if (err) { 
	  			console.log("err -->", err); 
				res.send(err);
  			}
	  	});

    });

// Routing --------

app.get('/home/*', function(req, res) {
	console.log("home page -->");
        res.sendFile(__dirname + '/views/index.html'); // path must be absolute
    });

app.listen(8008);