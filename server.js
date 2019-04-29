var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('shoppingCart', ['salads', 'cart']);
var bodyParser = require('body-parser');

// app.get('/', function(request, response) {
// 	response.send("Hello from the server");
// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// this method is to get the category data for admin view
app.get('/Admin', function(request, response) {
	// console.log("This is for the admin");

	db.categories.find(function (error, document) {
		// console.log(document);
		response.json(document);
	});
});

// this method is to post the category data form the admin view
app.post('/Admin', function(request, response) {
	// console.log(request.body);

	db.categories.insert(request.body, function (error, document) {
		// console.log(document);
		response.json(document);
	});
});

// this method is to get the salads data for salads view
app.get('/Salad', function(request, response) {
	// console.log("This is for the salad");

	db.salads.find(function (error, document) {
		// console.log(document);
		response.json(document);
	});
});

// this method is to post the item to cart collection
app.post('/Salad/:id', function(request, response) {
	var id = request.params.id;
	// console.log(request.body);

	db.cart.insert(request.body, function(error, document) {
		// console.log(document);
		response.json(document);
	});
});

app.listen(3000);
console.log("Server running on port 3000");

// app.get('/customerList', function(request, response) {
// 	console.log("I received a GET response");

// 	db.customerList.find(function(error, docs) {
// 		console.log(docs);
// 		response.json(docs);
// 	});
// });

// app.post('/customerList', function(request, response) {
// 	console.log(request.body);
// 	db.customerList.insert(request.body, function(error, doc) {
// 		response.json(doc);
// 	});
// });

// app.delete('/customerList/:id', function(request, response) {
// 	var id = request.params.id;
// 	console.log(id);
// 	db.customerList.remove({_id: mongojs.ObjectId(id)}, function(error, doc) {
// 		response.json(doc);
// 	});
// });

// app.get('/customerList/:id', function(request, response) {
// 	var id = request.params.id;
// 	console.log(id);
// 	db.customerList.findOne({_id: mongojs.ObjectId(id)}, function(error, doc) {
// 		response.json(doc);
// 	});
// });

// app.put('/customerList/:id', function(request, response) {
// 	var id = request.params.id;
// 	console.log(request.body.name);
// 	db.customerList.findAndModify({
// 		query: {_id: mongojs.ObjectId(id)},
// 		update: {$set: {name: request.body.name, email: request.body.email, phone: request.body.phone}},
// 		new: true}, function(error, doc) {
// 			response.json(doc);
// 		}
// 	);
// });
