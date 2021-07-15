const express = require('express');
const multer = require('multer');
const router = express.Router();

//Multer Settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/image');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  res.send('GET');
});

router.post('/', upload.single('image'), (req, res) => {
  try {
    const fileName = req.file.filename;
    const mimetype = req.file.mimetype;
    const hostName = req.headers.host;
    if (!mimetype.includes('image')) {
      return res
        .status(404)
        .json({ error: { msg: 'Only image, data type is not supported.' } });
    }
    // Send image link on success;
    res.status(200).send(hostName + '/image/' + fileName);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
