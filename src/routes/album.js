const express = require('express');
const albumController = require('../controllers/album');

const router = express.Router();

// router.post('/:artistId/album', albumController.create);
router.get('/album', albumController.read);

module.exports = router;
