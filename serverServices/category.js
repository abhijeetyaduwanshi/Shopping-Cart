module.exports = class Category {

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
     * get category
     */
    getCategory() {
        this.app.get('/category/:catName', (request, response) => {
            const catName = request.params.catName;

            this.db.collection(catName).find((error, document) => {
                response.json(document);
            });
        });
    }
};
