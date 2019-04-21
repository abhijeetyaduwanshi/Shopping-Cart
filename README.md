# Summary
This is the shopping cart project that I made in MEAN stack(MongoDB, ExpressJS, AngularJS and NodeJS). The purpose of the project is to create a web application to sell Pizza. The theme/inspiration of the project is dominos pizza. I am creating a project in MEAN stack to learn and share to code in JavaScrip.

# Steps to run the application
* Download or clone the project
* Open terminal window and navigate to the project
* Put `node server` command in the terminal window
* This will start the server to run the application on port 3000
* Also start MongoDB, follow steps to run MongoDB and then execute the following steps below
* Open any browser of choice and put `localhost:3000` to run the application on the browser

# Steps to run MongoDB
* MongoDb is saved on my local drive
* To run open command prompt and navigate to bin folder in MongoDB folder
* Run `mongod` this will run mongodb
* Now open another command prompt window and again navigate to bin folder in MongoDB folder
* Run `mongo` this will enable us to interact with mongodb
* `use shoppingCart`

# How to use MongoDB
* List all databases: `show dbs`
* Create or use an existing database: `use testDatabase` where testDatabase is one of the existing dbs if not then a new database with the name of testDatabase will be created, also this is case sensitive
* To check the currently selected database: `db`
* In MongoDB there are `collections` instead of `tables`, to create a collection select a db first using `use testDatabase` and then create collections: `db.createCollection("mycollection")`
* List all the collections: `show collections`
* DROP COLLECTION: `db.mycollection.drop()`
* Insert document(data) into a collection: `db.mycollection.insert({
	name: 'MongoDB Overview',
	description: 'MongoDB is no sql database',
	tags: ['mongodb', 'database', 'NoSQL'],
	likes: 100
})` where `mycollection` is our collection name, if the collection doesn't exist in the database, then MongoDB will create this collection and then insert a document into it.
Do not give id parameter in the document
In the inserted document, if we don't specify the `_id` parameter, then MongoDB assigns a unique ObjectId for this document.
* Insert multiple document(data) into a collection just pass array of documents in insert() command: `db.mycollection.insert([
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
])`
* Select * from collection or a database itself: `db.mycollection.find()` `db.testDatabase.find()`
* Make pretty output for Select * from: `db.mycollection.find().pretty()` `db.testDatabase.find().pretty()` this will display our data in a more manageable way

# Steps to stop the application
* In your terminal window put `ctrl + c` command, and this will stop the server

# Frameworks used
* ExpressJS
* AngularJS 1
* NodeJS
* Bootstrap 4
* HTML5
* CSS3
* JavaScript

# TO DO:
* All pages - Make the navigation fixed on the top of the page
* All pages - Style the navigation bar
* Category list page (home page) - get the categories images from dominos and put them in the category tabs
* Category list page (home page) - Style the category tabs
* All pages - Update navigation according to domonis
* home.html, categoriesListController.js - put categoryItem, a href, image src values

# Common conversions
HTML | ANGULAR
-----|--------
id | ng-attr-id
a tag href | a tag ng-href
img tag src | img tag ng-src







tabs a tag : text-decoration: none;
tabs : margin-left: 50px;
tabs : border: 1px solid #d9d9d9;
tabs : margin-bottom: 1em;
product-name : font-family: One Dot Condensed Bold,Arial Narrow,Arial,Helvetica,sans-serif;
a : color: #0078ae;
a : text-decoration: none;
a : cursor: pointer;
product description : font-size: 1em;
product description : white-space: normal;
product description : color: #666;
