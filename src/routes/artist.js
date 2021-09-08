const express = require('express');
const artistController = require('../controllers/artist');
const albumController = require('../controllers/album');

const router = express.Router();
const albumRouter = express.Router();

router.use('/', albumRouter);

router.post('/', artistController.create);

router.get('/', artistController.read);

router.get('/:artistId', artistController.readById);

router.patch('/:artistId', artistController.update);

router.delete('/:artistId', artistController.delete);

albumRouter.post('/:artistId/album', albumController.create);

albumRouter.get('/:artistId/album', albumController.read);

module.exports = router;
