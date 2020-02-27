module.exports = class Admin {

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
        this.app.get('/Admin', (request, response) => {
            this.db.categories.find((error, document) => {
                response.json(document);
            });
        });
    }

    /**
     * post category
     */
    postCategory() {
        this.app.post('/Admin', (request, response) => {
            this.db.categories.insert(request.body, (error, document) => {
                response.json(document);
            });

            this.db.createCollection(request.body.categoryTitle, (error, document) => {
                // null
            });
        });
    }

    /**
     * delete category based on id
     */
    deleteCategoryBasedOnId() {
        this.app.delete('/Admin/:id', (request, response) => {
            const id = request.params.id;

            this.db.categories.remove({_id: this.mongojs.ObjectId(id)}, (error, document) => {
                response.json(document);
            });

            // implement delete column
        });
    }
};
