const router = require('express').Router();

const prjt_basemodelController = require('../controllers/prjt_basemodel');

router.get('/prjt_basemodel', prjt_basemodelController.getBasemodelData);

router.get('/prjt_basemodel/:projectid', prjt_basemodelController.getOneBasemodelData);

router.post('/prjt_basemodel', prjt_basemodelController.createBasemodelData);

router.put('/prjt_basemodel/:projectid', prjt_basemodelController.updateBasemodelData);

router.delete('/prjt_basemodel/:projectid', prjt_basemodelController.deleteBasemodelData);

module.exports = router;