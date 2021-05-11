const router = require('express').Router();
const prjt_baselineController = require('../controllers/prjt_baseline');

router.get('/prjt_baseline', prjt_baselineController.getBaselineData);

router.get('/prjt_baseline/:projectid', prjt_baselineController.getOneBaselineData);

router.post('/prjt_baseline', prjt_baselineController.createBaselineData);

module.exports = router;