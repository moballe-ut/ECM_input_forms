const router = require('express').Router();

const prjt_mvSavingsController = require('../controllers/prjt_mv_savings');

router.get('/prjt_mv_savings', prjt_mvSavingsController.getMvSavingsData);

router.get('/prjt_mv_savings/:projectid', prjt_mvSavingsController.getOneMvSavingsData);

router.post('/prjt_mv_savings', prjt_mvSavingsController.createMvSavingsData);

router.put('/prjt_mv_savings/:projectid', prjt_mvSavingsController.updateMvSavingsData);

router.delete('/prjt_mv_savings/:projectid', prjt_mvSavingsController.deleteMvSavingsData);

module.exports = router;