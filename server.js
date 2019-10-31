var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('shoppingCart', ['Breads', 'Chicken', 'Desserts', 'Salads', 'Sandwiches', 'Drinks', 'Pasta' ,'Extras', 'cart']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// get category details data from categories table to populate admin page
app.get('/Admin', function(request, response) {
    db.categories.find(function(error, document) {
        response.json(document);
    });
});

// post category details data form admin page
// sends category data to categories table
// sends category title to create a new table to have products in them
app.post('/Admin', function(request, response) {
    db.categories.insert(request.body, function(error, document) {
        response.json(document);
    });

    db.createCollection(request.body.categoryTitle, function(error, document) {
        // null
    });
});

// put category details from admin edit category
// sends category data
app.put('/AdminEdit/:id', function(request, response) {
    var id = request.params.id;

    db.categories.findAndModify({
        query: {_id: mongojs.ObjectId(id)},
        update: {$set: { categoryTitle: request.body.categoryTitle, categoryDescription: request.body.categoryDescription, categoryId: request.body.categoryId, categoryRoute: request.body.categoryRoute, categoryImage: request.body.categoryImage}},
        new: true}, function(error, document) {
            response.json(document);
        }
    );
});

// post products data from admin page
// sends products data to category table
app.post('/AdminAddProduct/:tableName', function(request, response) {
    var tableName = request.params.tableName;

    db.collection(tableName).insert(request.body, function(error, document) {
        response.json(document);
    });
});

// get single category details from categories table to populate view category details modal
app.get('/Admin/:id', function(request, response) {
    var id = request.params.id;

    db.categories.find({_id: mongojs.ObjectId(id)}, function(error, document) {
        response.json(document);
    });
});

// get products details for a category on admin page
app.get('/AdminGetTitle/:title', function(request, response) {
    var title = request.params.title;

    db.collection(title).find({}, {productTitle: 1}, function(error, document) {
        response.json(document);
    });
});

// delete single category with category id from delete category modal
app.delete('/Admin/:id', function(request, response) {
    var id = request.params.id;

    db.categories.remove({_id: mongojs.ObjectId(id)}, function(error, document) {
        response.json(document);
    });
});

// get breads data for breads page
app.get('/category/Breads', function(request, response) {
    db.Breads.find(function(error, document) {
        response.json(document);
    });
});

// get chicken data for chicken page
app.get('/category/Chicken', function(request, response) {
    db.Chicken.find(function(error, document) {
        response.json(document);
    });
});

// get sandwiches data for sandwiches page
app.get('/category/Sandwiches', function(request, response) {
    db.Sandwiches.find(function(error, document) {
        response.json(document);
    });
});

// get desserts data for desserts page
app.get('/category/Desserts', function(request, response) {
    db.Desserts.find(function(error, document) {
        response.json(document);
    });
});

// get drinks data for drinks page
app.get('/category/Drinks', function(request, response) {
    db.Drinks.find(function(error, document) {
        response.json(document);
    });
});

// get pasta data for pasta page
app.get('/category/Pasta', function(request, response) {
    db.Pasta.find(function(error, document) {
        response.json(document);
    });
});

// get extras data for extras page
app.get('/category/Extras', function(request, response) {
    db.Extras.find(function(error, document) {
        response.json(document);
    });
});

// get salads data for salads page
app.get('/category/Salads', function(request, response) {
    db.Salads.find(function(error, document) {
        response.json(document);
    });
});












// this method is to get the category data for home view
app.get('/Home', function(request, response) {
    // console.log("This is for the admin");

    db.categories.find(function(error, document) {
        // console.log(document);
        response.json(document);
    });
});

// this method is to post the item to cart collection
app.post('/AddToCart', function(request, response) {
    var item = request.body.itemId;
    var type = request.body.type;

    db.cart.findAndModify({
        query: {itemId: item, type: type},
        update: {$inc: { count: 1 }},
        upsert: true,
        new: true}, function(error, document) {
            response.json(document);
        }
    );
});

// this method is to get the cart data for cart view
app.get('/Cart', function(request, response) {
    // console.log("This is for the cart");

    db.cart.find(function(error, document) {
        // console.log(document);
        response.json(document);
    });
});

// this method is to get the item data for cart view
app.get('/lookProduct/:id/:type', function(request, response) {
    var id = request.params.id;
    var type = request.params.type;

    db.collection(type).findOne({_id: mongojs.ObjectId(id)}, {productTitle: 1, productPrice: 1}, function(error, document) {
        // console.log(document);
        response.json(document);
    });
});

app.listen(3000);
console.log("Server running on port 3000");

// app.get('/customerList', function(request, response) {
//     console.log("I received a GET response");

//     db.customerList.find(function(error, docs) {
//         console.log(docs);
//         response.json(docs);
//     });
// });

// app.post('/customerList', function(request, response) {
//     console.log(request.body);
//     db.customerList.insert(request.body, function(error, doc) {
//         response.json(doc);
//     });
// });

// app.delete('/customerList/:id', function(request, response) {
//     var id = request.params.id;
//     console.log(id);
//     db.customerList.remove({_id: mongojs.ObjectId(id)}, function(error, doc) {
//         response.json(doc);
//     });
// });

// app.get('/customerList/:id', function(request, response) {
//     var id = request.params.id;
//     console.log(id);
//     db.customerList.findOne({_id: mongojs.ObjectId(id)}, function(error, doc) {
//         response.json(doc);
//     });
// });

// app.put('/customerList/:id', function(request, response) {
//     var id = request.params.id;
//     console.log(request.body.name);
//     db.customerList.findAndModify({
//         query: {_id: mongojs.ObjectId(id)},
//         update: {$set: {name: request.body.name, email: request.body.email, phone: request.body.phone}},
//         new: true}, function(error, doc) {
//             response.json(doc);
//         }
//     );
// });
