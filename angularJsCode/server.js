const express = require('express');
const app = express();
const mongojs = require('mongojs');

// local db
// const db = mongojs('shoppingCart', ['Breads', 'Chicken', 'Desserts', 'Salads', 'Sandwiches', 'Drinks', 'Pasta' ,'Extras', 'cart']);

// prod db mongodb atlas
const db = mongojs("mongodb+srv://admin:admin@shoppingcart-xqhw1.mongodb.net/test?retryWrites=true&w=majority");
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

/**
 * get category data
 * 
 * @param  {} '/Admin', url pattern
 * @param  {} function, callback function
 */
app.get('/Admin', (request, response) => {
    db.categories.find((error, document) => {
        response.json(document);
    });
});

/**
 * post category data
 * 
 * @param  {} '/Admin', url pattern
 * @param  {} function, callback function
 */
app.post('/Admin', (request, response) => {
    db.categories.insert(request.body, (error, document) => {
        response.json(document);
    });

    db.createCollection(request.body.categoryTitle, (error, document) => {
        // null
    });
});

/**
 * edit category data
 * 
 * @param  {id} '/AdminEdit/', url pattern: id of category
 * @param  {} function, callback function
 */
app.put('/AdminEdit/:id', (request, response) => {
    const id = request.params.id;

    db.categories.find({_id: mongojs.ObjectId(id)}, {categoryTitle: 1}, (error, document) => {
        const tableToEdit = document[0].categoryTitle;

        if (document) {
            db.categories.findAndModify({
                query: {_id: mongojs.ObjectId(id)},
                update: {$set: { categoryTitle: request.body.categoryTitle, categoryDescription: request.body.categoryDescription, categoryId: request.body.categoryId, categoryRoute: request.body.categoryRoute, categoryImage: request.body.categoryImage}},
                new: true}, (error, document) => {
                    response.json(document);
                }
            );

            db.collection(tableToEdit).rename(request.body.categoryTitle);
        }
    });
});

/**
 * edit product data
 * 
 * @param  {id/catName} '/Admin/EditProduct/', url pattern: id of product: parent cat of product
 * @param  {} function, callback function
 */
app.put('/Admin/EditProduct/:id/:catName', (request, response) => {
    const id = request.params.id;
    const table = request.params.catName;

    db.collection(table).findAndModify({
        query: {_id: mongojs.ObjectId(id)},
        update: {$set: { productTitle: request.body.productTitle, productDescription: request.body.productDescription, productImage: request.body.productImage, productPrice: request.body.productPrice, productIsVegetarian: request.body.productIsVegetarian, productIsSpicy: request.body.productIsSpicy}},
        new: true}, (error, document) => {
            response.json(document);
        }
    );
});

/**
 * post products data
 * 
 * @param  {tableName} '/AdminAddProduct/', url pattern: parent cat of product
 * @param  {} function, callback function
 */
app.post('/AdminAddProduct/:tableName', (request, response) => {
    const tableName = request.params.tableName;

    db.collection(tableName).insert(request.body, (error, document) => {
        response.json(document);
    });
});

/**
 * get category data
 * 
 * @param  {id} '/Admin/', url pattern: id of category
 * @param  {} function, callback function
 */
app.get('/Admin/:id', (request, response) => {
    const id = request.params.id;

    db.categories.find({_id: mongojs.ObjectId(id)}, (error, document) => {
        response.json(document);
    });
});

/**
 * get product data
 * 
 * @param  {id/:tableName} '/Admin/ViewProductDetails/', url pattern: id of product: parent cat of product
 * @param  {} function, callback function
 */
app.get('/Admin/ViewProductDetails/:id/:tableName', (request, response) => {
    const id = request.params.id;
    const tableName = request.params.tableName;

    db.collection(tableName).find({_id: mongojs.ObjectId(id)}, (error, document) => {
        response.json(document);
    });
});

/**
 * get products data
 * 
 * @param  {title} '/AdminGetTitle/', url pattern: name of the category
 * @param  {} function, callback function
 */
app.get('/AdminGetTitle/:title', (request, response) => {
    const title = request.params.title;

    db.collection(title).find((error, document) => {
        response.json(document);
    });
});

/**
 * delete category
 * 
 * @param  {id} '/Admin/', url pattern: id of the category
 * @param  {} function, callback function
 */
app.delete('/Admin/:id', (request, response) => {
    const id = request.params.id;

    db.categories.remove({_id: mongojs.ObjectId(id)}, (error, document) => {
        response.json(document);
    });
});

/**
 * get pizzas data
 * 
 * @param  {} '/category/Pizzas', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Pizzas', (request, response) => {
    db.Pizzas.find((error, document) => {
        response.json(document);
    });
});

/**
 * get breads data
 * 
 * @param  {} '/category/Breads', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Breads', (request, response) => {
    db.Breads.find((error, document) => {
        response.json(document);
    });
});

/**
 * get chicken data
 * 
 * @param  {} '/category/Chicken', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Chicken', (request, response) => {
    db.Chicken.find((error, document) => {
        response.json(document);
    });
});

/**
 * get sandwiches data
 * 
 * @param  {} '/category/Sandwiches', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Sandwiches', (request, response) => {
    db.Sandwiches.find((error, document) => {
        response.json(document);
    });
});

/**
 * get desserts data
 * 
 * @param  {} '/category/Desserts', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Desserts', (request, response) => {
    db.Desserts.find((error, document) => {
        response.json(document);
    });
});

/**
 * get drinks data
 * 
 * @param  {} '/category/Drinks', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Drinks', (request, response) => {
    db.Drinks.find((error, document) => {
        response.json(document);
    });
});

/**
 * get pasta data
 * 
 * @param  {} '/category/Pasta', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Pasta', (request, response) => {
    db.Pasta.find((error, document) => {
        response.json(document);
    });
});

/**
 * get extras data
 * 
 * @param  {} '/category/Extras', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Extras', (request, response) => {
    db.Extras.find((error, document) => {
        response.json(document);
    });
});

/**
 * get salads data
 * 
 * @param  {} '/category/Salads', url pattern
 * @param  {} function, callback function
 */
app.get('/category/Salads', (request, response) => {
    db.Salads.find((error, document) => {
        response.json(document);
    });
});

/**
 * get category data
 * 
 * @param  {} '/Home', url pattern
 * @param  {} function, callback function
 */
app.get('/Home', (request, response) => {
    db.categories.find((error, document) => {
        response.json(document);
    });
});

/**
 * get navigation data
 * 
 * @param  {} '/Navigation', url pattern
 * @param  {} function, callback function
 */
app.get('/Navigation', (request, response) => {
    db.categories.find({}, {categoryTitle: 1, categoryRoute: 1}, (error, document) => {
        response.json(document);
    });
});

/**
 * get item data for cart view
 * 
 * @param  {id/:type} '/lookProduct/', url pattern: item id: item parent cat
 * @param  {} function, callback function
 */
app.get('/lookProduct/:id/:type', (request, response) => {
    const id = request.params.id;
    const type = request.params.type;

    db.collection(type).findOne({_id: mongojs.ObjectId(id)}, {productTitle: 1, productPrice: 1}, (error, document) => {
        response.json(document);
    });
});

app.listen(port);
console.log(`Server running on port ${port}`);

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
