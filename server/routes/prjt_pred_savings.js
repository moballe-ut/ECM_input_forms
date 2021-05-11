const router = require('express').Router();

const prjt_predSavingsController = require('../controllers/prjt_pred_savings');

router.get('/prjt_pred_savings', prjt_predSavingsController.getPredSavingsData);

router.get('/prjt_pred_savings/:projectid', prjt_predSavingsController.getOnePredSavingsData);

router.post('/prjt_pred_savings', prjt_predSavingsController.createPredSavingsData);

router.put('/prjt_pred_savings/:projectid', prjt_predSavingsController.updatePredSavingsData);

router.delete('/prjt_pred_savings/:projectid', prjt_predSavingsController.deletePredSavingsData);

module.exports = router;