const router = require('express').Router();

const prjt_hoursController = require('../controllers/prjt_hours');

router.get('/prjt_hours', prjt_hoursController.getHoursData);

router.get('/prjt_hours/:projectid', prjt_hoursController.getOneHoursData);

router.post('/prjt_hours', prjt_hoursController.createHoursData);

router.put('/prjt_hours/:projectid', prjt_hoursController.updateHoursData);

router.delete('/prjt_hours/:projectid', prjt_hoursController.deleteHoursData);

module.exports = router;