module.exports = class Home {

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
        this.app.get('/Home', (request, response) => {
            this.db.categories.find((error, document) => {
                response.json(document);
            });
        });
    }
};
