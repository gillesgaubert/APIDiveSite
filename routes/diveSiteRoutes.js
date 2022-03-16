const express = require('express');
const diveSiteController = require('../controller/diveSiteController');
const router = express.Router();

// here I treat the different queries to call controller methods
router.get('/', diveSiteController.getDiveSites);
router.get('/:id', diveSiteController.getDiveSite);
router.post('/', diveSiteController.postEditDiveSite);
router.put('/', diveSiteController.postEditDiveSite);
router.delete('/:id', diveSiteController.DeleteDiveSites);

// export the router module
module.exports = router;