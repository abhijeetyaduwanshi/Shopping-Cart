module.exports = class Navigation {

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
     * get navigation
     */
    getNavigation() {
        this.app.get('/Navigation', (request, response) => {
            this.db.categories.find({}, {categoryTitle: 1, categoryRoute: 1}, (error, document) => {
                response.json(document);
            });
        });
    }
};
