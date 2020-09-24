const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const app = express();
const { getRandomHamsters } = require("./getRandomHamsters.js");
const { getSelectedHamster } = require('./getSelectedHamster.js');
const { addHamster } = require('./addHamster.js');
const newHamsterId = require('./newHamsterId.js');

const PORT = process.env.PORT || 1234;

// Daniel START //
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../src/assets')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

// Middleware

app.post("/upload", upload.single('imgName'), (req, res) => {
    let fileType = req.file.mimetype.split('/')[1];
    console.log('fileType ', fileType);
    let newFileName = req.file.filename + '.' + fileType
    fs.rename(`../src/assets/${req.file.filename}`, `../src/assets/${newFileName}`, function(){
        console.log('callback');
        res.send('200')
    })
})

// Daniel END //

app.use(
    (req, res, next) => {
        console.log('LOGGER: ');
        console.log(
            `Method: ${req.method}. URL: ${req.url}.`
            );
            next()
        }
        );
app.use(express.static(__dirname + "/../build/"));
// app.use(express.static(__dirname + "/../src/"));
// app.use(express.static(__dirname + "/../public/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
        
// TODO: ROUTES HERE

// Get # of randomized hamsters based on request query
app.get("/api/gethamsters/random", (req, res) => {
	let query = req.query;
    getRandomHamsters(query, (response) => {
        res.send(response)
    })
});

// Get specified hamsters based on request query
app.get("/api/gethamster", (req, res) => {
	console.log("Query ", req.query);
	getSelectedHamster(req, (response) => {
		res.send(response);
	});
});

// Add a new hamster
app.post("/api/addhamster", (req, res) => {
	addHamster(req.body, (addedHamster) => {
		console.log("Adding hamster.");
		console.log(req.body);
		res.send(addedHamster);
	});
});


// START SERVER

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});