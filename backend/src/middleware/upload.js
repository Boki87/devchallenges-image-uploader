const { v4: uuidv4 } = require('uuid');
const util = require('util');
const multer = require('multer');
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/resources/uploads')
    },
    filename: (req, file, cb) => {
        
        const match = ["image/jpeg", "image/png"];
        if(!match.includes(file.mimetype)) {
            return cb(`${file.originalname} is invalid. Only accepting png/jpg`,null)
        }

        cb(null, 'photo-' + uuidv4() + '.' + file.mimetype.split('/')[1])
    }
})

let uploadFile = multer({
    storage: storage,
    limits: {fileSize: maxSize}
}).single("file") //must match name of field in form

let uploadFileMiddleware = util.promisify(uploadFile)
module.exports = uploadFileMiddleware