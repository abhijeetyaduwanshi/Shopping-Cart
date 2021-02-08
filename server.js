const express = require('express');
const app = express();

app.use(express.static('./dist/shopping-cart'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/shopping-cart/'}),
);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
