let express = require('express'),
    path = require('path'),
    MongoClient = require('mongodb').MongoClient,
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./database/db');

const url = dataBaseConfig.url;
const dbName = dataBaseConfig.db;
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err => {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    client.close();
});

const catRoute = require('./routes/cat.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(`${__dirname}/dist/shoppingCart`)));
app.use('/', express.static(path.join(`${__dirname}/dist/shoppingCart`)));
app.use('/api', catRoute)

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

// app.use((req, res, next) => {
//     next(createError(404));
// });

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
