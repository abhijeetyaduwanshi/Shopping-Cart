module.exports = class AdminHome {

    /**
     * class constructor
     * 
     * @param  {} app, express app
     * @param  {} db, database
     * @param  {} mongojs, mongodb object
     */
    constructor(app, db, mongojs) {
        this.app = app;
        this.db = db;
        this.mongojs = mongojs;
    }

    /**
     * get all categories
     */
    getAllCategories() {
        this.app.get('/admin', (request, response) => {
            this.db.categories.find((error, document) => {
                response.json(document);
            });
        });
    }

    /**
     * post category
     */
    postCategory() {
        this.app.post('/admin', (request, response) => {
            this.db.categories.insert(request.body, (error, document) => {
                response.json(document);
            });

            this.db.createCollection(request.body.categoryTitle, (error, document) => {
                // null
            });
        });
    }

    /**
     * edit category based on id
     */
    editCategoryBasedOnId() {
        this.app.put('/admin/:id', (request, response) => {
            const id = request.params.id;

            this.db.categories.find({_id: this.mongojs.ObjectId(id)}, {categoryTitle: 1}, (error, document) => {
                const tableToEdit = document[0].categoryTitle;

                if (document) {
                    this.db.categories.findAndModify({
                        query: {_id: this.mongojs.ObjectId(id)},
                        update: {$set: { categoryTitle: request.body.categoryTitle, categoryDescription: request.body.categoryDescription, categoryId: request.body.categoryId, categoryRoute: request.body.categoryRoute, categoryImage: request.body.categoryImage}},
                        new: true}, (error, document) => {
                            response.json(document);
                        }
                    );

                    this.db.collection(tableToEdit).rename(request.body.categoryTitle);
                }
            });
        });
    }

    /**
     * delete category based on id
     */
    deleteCategoryBasedOnId() {
        this.app.delete('/admin/:id', (request, response) => {
            const id = request.params.id;

            this.db.categories.remove({_id: this.mongojs.ObjectId(id)}, (error, document) => {
                response.json(document);
            });

            // implement delete column
        });
    }
};