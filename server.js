var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/customerList', function(request, response) {
	console.log("I received a GET response");

	customer1 = {
		name: 'Abhijeet',
		email: 'abhijeet@testemail.com',
		phone: '1111111111'
	};

	customer2 = {
		name: 'Piyush',
		email: 'piyush@testemail.com',
		phone: '2222222222'
	};

	customer3 = {
		name: 'Ayush',
		email: 'ayush@testemail.com',
		phone: '3333333333'
	};

	var customerList = [customer1, customer2, customer3];
	response.json(customerList);
});

app.listen(3000);
console.log("Server running on port 3000");
