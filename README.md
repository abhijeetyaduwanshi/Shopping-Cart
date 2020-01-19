# ShoppingCart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Summary

Shopping cart app is built in MEAN stack(MongoDB, ExpressJS, AngularJS upgrated to Angular 8 and NodeJS). The purpose of the project is to create a web application to sell Pizza. The theme/inspiration of the project is taken from dominos pizza. I am creating this project to learn and share my coding skills in JavaScrip.

## Steps to run the app

* Download or clone the project
* Open terminal window and navigate to the project
* Run `ng serve` in the terminal window
* This will start the server to run the application on port 4200
* Also to start MongoDB, follow the steps to run MongoDB given below
* Open any browser of choice and navigate to `http://localhost:4200/` to run the application

## Steps to run MongoDB

* MongoDb is saved on local drive
* Open command prompt and navigate to bin folder of MongoDB
* Run `mongod` this will run mongodb
* Open another command prompt window and navigate to bin folder of MongoDB
* Run `mongo` this will enable us to interact with mongodb
* `use shoppingCart`

## Media Queries: To target desktop, tablet and mobile

```
@media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { /* hi-res laptops and desktops */ }
```

## How to use MongoDB

* List all databases: `show dbs`
* Create or use an existing database: `use testDatabase` where testDatabase is one of the existing dbs if not then a new database with the name of testDatabase will be created, also this is case sensitive
* To check the currently selected database: `db`
* In MongoDB there are `collections` instead of `tables`, to create a collection select a db first using `use testDatabase` and then create collections: `db.createCollection("mycollection")`
* List all the collections: `show collections`
* DROP COLLECTION: `db.mycollection.drop()`
* Insert document(data) into a collection
```
db.mycollection.insert({
    name: 'MongoDB Overview',
    description: 'MongoDB is no sql database',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```
where `mycollection` is our collection name, if the collection doesn't exist in the database, then MongoDB will create this collection and then insert a document into it
* Do not give id parameter in the document
* In the inserted document, if we don't specify the `_id` parameter, then MongoDB assigns a unique ObjectId for this document
* Insert multiple document(data) into a collection just pass array of documents in insert() command
```
db.mycollection.insert([
    {
        name: 'MongoDB Overview',
        description: 'MongoDB is no sql database',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 100
    },
    {
        name: 'NoSQL Database',
        description: "NoSQL database doesn't have tables",
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 20,
        comments: [
            {
                user:'user1',
                message: 'My first comment',
                dateCreated: new Date(2013,11,10,2,35),
                like: 0
            }
        ]
    }
])
```
* Select * from collection or a database itself: `db.mycollection.find()` `db.testDatabase.find()`
* Make pretty output for Select * from: `db.mycollection.find().pretty()` `db.testDatabase.find().pretty()` this will display our data in a more manageable way

## Steps to stop the application

* In your terminal window `ctrl + c` command, and this will stop the server

## Frameworks used

* ExpressJS
* AngularJS 1 upgrated to Angular 8
* NodeJS
* Bootstrap 4
* HTML5
* CSS3
* JavaScript

## TO DO

* Admin - Check when adding category adds details to categories table and also creates a table of its own
* Admin - Delete category only removes entry from categories table, should also drop its own collection from the db
* All pages - Make the navigation fixed on the top of the page
* All pages - Style the navigation bar
* Category list page (home page) - get the categories images from dominos and put them in the category tabs
* Category list page (home page) - Style the category tabs
* All pages - Update navigation according to domonis
* home.html, categoriesListController.js - put categoryItem, a href, image src values
* admin.html - create a button which says add category, click on the button should be a model with the form to add category
* admin.html - html id should be disabled and should auto prepare with when the user fills the category title (do it like netbeans)
* admin.html - route same as above
* admin.html - image should be a input that uploades image and gets saved in images/category folder

## Common conversions

HTML | ANGULAR
-----|--------
id | ng-attr-id
a tag href | a tag ng-href
img tag src | img tag ng-src
