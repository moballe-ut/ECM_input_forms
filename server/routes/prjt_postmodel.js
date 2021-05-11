const router = require('express').Router();

const prjt_postmodelController = require('../controllers/prjt_postmodel');

router.get('/prjt_model_post', prjt_postmodelController.getPostmodelData);

router.get('/prjt_model_post/:projectid', prjt_postmodelController.getOnePostmodelData);

router.post('/prjt_model_post', prjt_postmodelController.createPostmodelData);

router.put('/prjt_model_post/:projectid', prjt_postmodelController.updatePostmodelData);

router.delete('/prjt_model_post/:projectid', prjt_postmodelController.deletePostmodelData);

module.exports = router;