const router = require('express').Router();

const prjt_fundingController = require('../controllers/prjt_funding');

router.get('/prjt_funding', prjt_fundingController.getFundingData);

router.get('/prjt_funding/:projectid', prjt_fundingController.getOneFundingData);

router.post('/prjt_funding', prjt_fundingController.createFundingData);

router.put('/prjt_funding/:projectid', prjt_fundingController.updateFundingData);

router.delete('/prjt_funding/:projectid', prjt_fundingController.deleteFundingData);

module.exports = router;