const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 1234;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO: ROUTES HERE
app.get("/", (req, res) => {
    res.console.log('Hello!')
});


// START SERVER

app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});