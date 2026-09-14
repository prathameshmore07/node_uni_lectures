const express = require('express');
const router = express.Router();

const {getAllplants,addPlant,updatePlant, deletePlant} = require('../controllers/plantController');

router.get('/plants', getAllplants);
router.post('/plants', addPlant);
router.put('/plants/:id', updatePlant);
router.delete('/plants/:id', deletePlant);

module.exports = router;