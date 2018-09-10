const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('hello from server');
})

app.listen(PORT, () => {
    console.log("Running on " + PORT);
});