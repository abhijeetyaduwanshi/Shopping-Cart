module.exports = class Admin {

    /**
     * class constructor
     * 
     * @param  {} app, express app
     * @param  {} db, database
     */
    constructor(app, db) {
        this.app = app;
        this.db = db;
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
};
