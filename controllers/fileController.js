// import multer from 'multer';
const multer = require('multer');
const uuid = require('uuid').v4;
// import { v4 as uuid } from 'uuid';
// require('dotenv').config();

const MAIN_URL =
    (process.env.MAIN_URL ? process.env.MAIN_URL : 'http://localhost:8000') +
    '/auto_uploads/';

const URL_relative = '/auto_uploads/';
class FileController {
    storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, './uploads/');
        },
        filename: (req, file, callback) => {
            let fExt = file.originalname.split('.');
            fExt = fExt[fExt.length - 1];
            console.log(fExt);
            const filename = Date.now() + uuid() + '.' + fExt;
            callback(null, filename);
        },
    });

    upload = multer({
        storage: this.storage,
    });

    uploadFile = async (req, res) => {
        console.log(req.body);
        // console.log(req.headers)

        // if (req.headers['secret_token'] != process.env.SECRET_TOKEN) {
        //   await fs.unlink(
        //     path.join(__dirname, 'uploads', req.file.filename),
        //     (err) => {
        //       if (err && err.code == 'ENOENT') {
        //         // file doens't exist
        //         console.info("File doesn't exist, won't remove it.");
        //       } else if (err) {
        //         // other errors, e.g. maybe we don't have enough permission
        //         console.error('Error occurred while trying to remove file');
        //       } else {
        //         console.info(`removed`);
        //       }
        //     },
        //   );
        //   return res.status(401).json({
        //     error: 'Unauthorized!',
        //   });
        // }
        return res.json({
            filename: req.file.filename,
            url: MAIN_URL + req.file.filename,
            status: 'success',
        });
    };
}

module.exports = FileController;
