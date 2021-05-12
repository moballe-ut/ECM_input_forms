const pool = require('../models/db');

module.exports = {

    //Create Data
    createFundingData: async(req, res) => {
        const { projectid, fundimp_greenfund, fundimp_facilities, fundimp_repairreplacement, fundimp_uem, 
            fundimp_aux, fundann_facilities, fundann_uem, fundann_aux } = req.body;

            try {

                const funding = await pool.query(`INSERT INTO prjt_funding ( projectid, fundimp_greenfund, fundimp_facilities, fundimp_repairreplacement, fundimp_uem, 
                    fundimp_aux, fundann_facilities, fundann_uem, fundann_aux) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [
                        projectid, fundimp_greenfund, fundimp_facilities, fundimp_repairreplacement, fundimp_uem, 
                        fundimp_aux, fundann_facilities, fundann_uem, fundann_aux
                    ]);

                    return res.json(funding);
                
            } catch (error) {

                console.error(error.message);
                return res.status(500).json(error);
                
            };
    },

     //Get all data
     getFundingData: async (req, res) => {

        try {

            const funding = await pool.query("SELECT * FROM prjt_funding");

            return res.json(funding.rows);
            
        } catch (error) {

            console.error(error.message);
                return res.status(500).json(error);
            
        };
    },


    // Get a specific data point based on primary key
    getOneFundingData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const funding = await pool.query("SELECT * FROM prjt_funding WHERE projectid = $1", [
                projectid
            ]);

            return res.json(funding.rows);

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

     //Update data
     updateFundingData: async(req , res) => {
        const { fundimp_greenfund, fundimp_facilities, fundimp_repairreplacement, fundimp_uem, 
            fundimp_aux, fundann_facilities, fundann_uem, fundann_aux } = req.body;
        const { projectid } = req.params;

        try {

            const funding = await pool.query(`UPDATE prjt_funding SET fundimp_greenfund = $1, fundimp_facilities = $2, fundimp_repairreplacement = $3, fundimp_uem = $4, fundimp_aux = $5, 
            fundann_facilities = $6, fundann_uem = $7, fundann_aux = $8 WHERE projectid = $9`, [

             fundimp_greenfund, fundimp_facilities, fundimp_repairreplacement, fundimp_uem, 
             fundimp_aux, fundann_facilities, fundann_uem, fundann_aux, projectid 
            ]);

            return res.json({message: "funding data has been updated"});
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deleteFundingData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const funding = await pool.query("DELETE FROM prjt_funding WHERE projectid = $1", [
                projectid
            ]);

            return res.json({message: "costs data data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
}