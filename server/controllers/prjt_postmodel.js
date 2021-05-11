const pool = require('../models/db');

module.exports = {

    //Create data
    createMvSavingsData: async (req, res, next) => {
        const { projectid, postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, postmodel_stm__deleted, postmodel_gas__deleted, postmodel_hhw__deleted, 
           postmodel_cdd_rsq, postmodel_hdd_rsq, postmodel_cdd_cvrmse, postmodel_hdd_cvrmse, } = req.body;

            try {

                const mvSavingsdata = await pool.query(`INSERT INTO prjt_mv_savings (projectid, postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, 
                    postmodel_stm__deleted, postmodel_gas__deleted, postmodel_hhw__deleted,postmodel_cdd_rsq, postmodel_hdd_rsq, postmodel_cdd_cvrmse,postmodel_hdd_cvrmse) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [
                        projectid, postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, postmodel_stm__deleted, postmodel_gas__deleted, 
                        postmodel_hhw__deleted, postmodel_cdd_rsq, postmodel_hdd_rsq, postmodel_cdd_cvrmse,postmodel_hdd_cvrmse
                    ]);
                    
                    return res.json(mvSavingsdata);

            } catch (error) {

                console.error(error.message);
                return res.status(500).json(error);

            };
    },

    //Get all data
    getMvSavingsData: async (req, res) => {

        try {

            const mvSavingsdata = await pool.query("SELECT * FROM prjt_mv_savings");

            return res.json(mvSavingsdata.rows);
            
        } catch (error) {

            console.error(error.message);
                return res.status(500).json(error);
            
        };
    },


    // Get a specific data point based on primary key
    getOneMvSavingsData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const mvSavingsdata = await pool.query("SELECT * FROM prjt_mv_savings WHERE projectid = $1", [
                projectid
            ]);

            return res.json(mvSavingsdata.rows);

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

     //Update data
     updateMvSavingsData: async(req , res) => {
        const { postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, postmodel_stm__deleted, 
            postmodel_gas__deleted, postmodel_hhw__deleted, postmodel_cdd_rsq, postmodel_hdd_rsq, postmodel_cdd_cvrmse,postmodel_hdd_cvrmse } = req.body;
        
        const { projectid } = req.params;

        try {

            const mvSavingsdata = await pool.query(`UPDATE prjt_mv_savings SET postmodel_cddbasetemp = $1, postmodel_hddbasetemp = $2, postmodel_chw__deleted = $3, postmodel_ele__deleted = $4, 
            postmodel_stm__deleted = $5, postmodel_gas__deleted = $6, postmodel_hhw__deleted = $7, postmodel_cdd_rsq = $8, postmodel_hdd_rsq = $9, postmodel_cdd_cvrmse = $10, 
           postmodel_hdd_cvrmse = $11, WHERE projectid = $12 `, [

                postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, postmodel_gas__deleted, postmodel_hhw__deleted, 
                       postmodel_cdd_rsq, postmodel_cdd_cvrmse,postmodel_hdd_cvrmse, postmodel_hdd_rsq, postmodel_stm__deleted, projectid 
            ]);

            return res.json(mvSavingsdata, {message: "mvSavingsdata data has been updated"});
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deleteMvSavingsData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const mvSavingsdata = await pool.query("DELETE FROM prjt_mv_savings WHERE projectid = $1", [
                projectid
            ]);

            return res.json(mvSavingsdata, {message: "mv_savings data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
}