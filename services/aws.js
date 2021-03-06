const AWS = require('aws-sdk');
const http = require('http');
const fs = require('fs');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();

aws.config.update({
  //AWS Keys
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'us-east-1' // region of your bucket
});

const s3 = new aws.S3();

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'kento-firebnb',
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString())
//     }
//   })
// })

const filepath = '../images/88.jpg'
let params = {
  Bucket: 'kento-firebnb',
  Body: fs.createReadStream(filepath),
  Key: 'folder/' + Date.now() + '_' + path.basename(filepath)
}

s3.upload(params, (err, data) => {
  if (err) {
    console.log('error: ', err);
  }

  if (data) {
    console.log('upload in: ', data.location);
  }
});

module.exports = upload;
