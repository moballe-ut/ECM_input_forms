const router = require('express').Router();

const prjt_basemodelController = require('../controllers/prjt_basemodel');

router.get('/prjt_model_base', prjt_basemodelController.getBasemodelData);

router.get('/prjt_model_base/:projectid', prjt_basemodelController.getOneBasemodelData);

router.post('/prjt_model_base', prjt_basemodelController.createBasemodelData);

router.put('/prjt_model_base/:projectid', prjt_basemodelController.updateBasemodelData);

router.delete('/prjt_model_base/:projectid', prjt_basemodelController.deleteBasemodelData);

module.exports = router;