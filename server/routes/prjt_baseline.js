const router = require('express').Router();

const prjt_baselineController = require('../controllers/prjt_baseline');

router.get('/prjt_baseline', prjt_baselineController.getBaselineData);

router.get('/prjt_baseline/:projectid', prjt_baselineController.getOneBaselineData);

router.post('/prjt_baseline', prjt_baselineController.createBaselineData);

router.put('/prjt_baseline/:projectid', prjt_baselineController.updateBaselineData);

router.delete('/prjt_baseline/:projectid', prjt_baselineController.deleteBaselineData);

module.exports = router;