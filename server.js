var express = require('express');
var app = express();

// app.get('/', function(request, response) {
// 	response.send("Hello from the server");
// });

app.use(express.static(__dirname + "/public"));

app.get('/Salad', function(request, response) {
	console.log("This is for the salad");

	salad1 = {
		productImage: 'images/salads/salad-classicGarden.jpg',
		productTitle: 'Classic Garden',
		productDescription: 'A crisp and colorful combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.',
		productPrice: ''
	};

	salad2 = {
		productImage: 'images/salads/salad-chickenCaesar.jpg',
		productTitle: 'Chicken Caesar',
		productDescription: 'The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.',
		productPrice: ''
	};

	var products = [salad1, salad2];
	response.json(products);
});

app.listen(3000);
console.log("Server running on port 3000");

// var mongojs = require('mongojs');
// var db = mongojs('customerList', ['customerList']);
// var bodyParser = require('body-parser');

// app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.json());

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
