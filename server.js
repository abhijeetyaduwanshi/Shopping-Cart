const express = require('express');
const app = express();
const mongojs = require('mongojs');

// local db
// const db = mongojs('shoppingCart', ['Breads', 'Chicken', 'Desserts', 'Salads', 'Sandwiches', 'Drinks', 'Pasta' ,'Extras', 'cart']);

// prod db mongodb atlas
const db = mongojs("mongodb+srv://admin:admin@shoppingcart-xqhw1.mongodb.net/test?retryWrites=true&w=majority");
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const AdminHome = require('./serverServices/admin/adminHome.js');
const adminHome = new AdminHome(app, db, mongojs);

const Category = require('./serverServices/category.js');
const category = new Category(app, db);

const Home = require('./serverServices/home.js');
const home = new Home(app, db);

const Navigation = require('./serverServices/navigation.js');
const navigation = new Navigation(app, db);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

/**
 * get all categories for home page
 */
home.getAllCategories();

/**
 * get category for category pages
 */
category.getCategory();

/**
 * get navigation for all pages
 */
navigation.getNavigation();

/**
 * get all categories for admin home page
 */
adminHome.getAllCategories();

/**
 * post category from admin home page
 */
adminHome.postCategory();

/**
 * edit category based on id from home page
 */
adminHome.editCategoryBasedOnId();

/**
 * delete category based on id from admin home page
 */
adminHome.deleteCategoryBasedOnId();

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
