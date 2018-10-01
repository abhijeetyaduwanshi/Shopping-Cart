var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('customerList', ['customerList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/customerList', function(request, response) {
	console.log("I received a GET response");

	db.customerList.find(function(error, docs) {
		console.log(docs);
		response.json(docs);
	});
});

app.post('/customerList', function(request, response) {
	console.log(request.body);
	db.customerList.insert(request.body, function(error, doc) {
		response.json(doc);
	});
});

app.listen(3000);
console.log("Server running on port 3000");
