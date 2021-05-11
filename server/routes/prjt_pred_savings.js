const router = require('express').Router();

const prjt_predSavingsController = require('../controllers/prjt_pred_savings');

router.get('/prjt_model_post', prjt_predSavingsController.getPredSavingsData);

router.get('/prjt_model_post/:projectid', prjt_predSavingsController.getPredSavingsData);

router.post('/prjt_model_post', prjt_predSavingsController.createPredSavingsData);

router.put('/prjt_model_post/:projectid', prjt_predSavingsController.updatePredSavingsData);

router.delete('/prjt_model_post/:projectid', prjt_predSavingsController.deletePredSavingsData);

module.exports = router;