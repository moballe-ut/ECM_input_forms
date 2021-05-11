const router = require('express').Router();

const prjt_costsController = require('../controllers/prjt_costs');

router.get('/prjt_costs', prjt_costsController.getCostsData);

router.get('/prjt_costs/:projectid', prjt_costsController.getOneCostsData);

router.post('/prjt_costs', prjt_costsController.createCostsData);

router.put('/prjt_costs/:projectid', prjt_costsController.updateCostsData);

router.delete('/prjt_costs/:projectid', prjt_costsController.deleteCostsData);

module.exports = router;