let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected sucessfully ')
    }, error => {
        console.log('Could not connected to database : ' + error)
    }
)

const catRoute = require('./routes/cat.route');
const topNavigationRoute = require('./routes/topNavigation.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(`${__dirname}/dist/shoppingCart`)));
app.use('/', express.static(path.join(`${__dirname}/dist/shoppingCart`)));
app.use('/api', catRoute)
app.use('/api', topNavigationRoute)

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
