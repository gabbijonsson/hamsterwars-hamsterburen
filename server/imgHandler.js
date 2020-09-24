const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "../src/assets");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname);
    }
});

const upload = multer({ storage: storage });


module.exports = {
    upload
};