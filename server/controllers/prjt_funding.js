const pool = require('../models/db');

module.exports = {

    //Create Data
    createFundingData: async(req, res) => {
        const { projectid, fundimp_greenfund, fundimp_facilities, fundimp_repairreplacement, fundimp_uem, 
            fundimp_aux, fundann_facilities, fundann_uem, fundann_aux, fundimp_total, fundann_total } = req.body;

            try {

                const funding = await pool.query(`INSERT INTO prjt_funding ( projectid, fundimp_greenfund, fundimp_facilities, fundimp_repairreplacement, fundimp_uem, 
                    fundimp_aux, fundann_facilities, fundann_uem, fundann_aux, fundimp_total, fundann_total) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`)
                
            } catch (error) {
                
            }
    }
}