const router = require('express').Router();

const prjt_metadataController = require('../controllers/prjt_metadata');

router.get('/prjt_metadata', prjt_metadataController.getMetaData);

router.get('/prjt_metadata/:project_id', prjt_metadataController.getOneMetaData);

router.post('/prjt_metadata', prjt_metadataController.createMetaData);

router.put('/prjt_metadata/:project_id', prjt_metadataController.updateMetaData);

router.delete('/prjt_metadata/:project_id', prjt_metadataController.deleteMetaData);

module.exports = router;