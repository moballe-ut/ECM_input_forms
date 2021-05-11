const pool = require('../models/db');

module.exports = {
    // Create Data
    createBasemodelData: async(req, res) => {
        const { projectid, basemodel_cddbasetemp, basemodel_hddbasetemp, basemodel_chw__deleted, basemodel_ele__deleted, basemodel_stm__deleted, basemodel_gas__deleted, 
            basemodel_hhw__deleted, basemodel_cdd_rsq, basemodel_hdd_rsq, basemodel_cdd_cvrmse, basemodel_hdd_cvrmse} = req.body;

        try {
            const basemodel = await pool.query
            (`INSERT * INTO prjt_model_base (projectid, basemodel_cddbasetemp, basemodel_hddbasetemp, basemodel_chw__deleted, basemodel_ele__deleted, basemodel_stm__deleted, 
                basemodel_gas__deleted, basemodel_hhw__deleted, basemodel_cdd_rsq, basemodel_hdd_rsq, basemodel_cdd_cvrmse, basemodel_hdd_cvrmse) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [
                projectid, basemodel_cddbasetemp, basemodel_hddbasetemp, basemodel_chw__deleted, basemodel_ele__deleted, basemodel_stm__deleted, 
                basemodel_gas__deleted, basemodel_hhw__deleted, basemodel_cdd_rsq, basemodel_hdd_rsq, basemodel_cdd_cvrmse, basemodel_hdd_cvrmse
            ]);

            return res.json(basemodel);

        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
        };
    },
    
    //Get all data
    getBasemodelData: async(req, res) => {
        
        try {
            
            const basemodel = await pool.query("SELECT * FROM prjt_model_base");

            return res.json(basemodel.rows);

        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };
    },

    // Get a specific data point based on primary key
    getOneBasemodelData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const basemodel = await pool.query("SELECT * FROM prjt_model_base WHERE projectid = $1", [
                projectid
            ]);

            return res.json(basemodel.rows);

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

    //Update data
    updateBasemodelData: async(req , res) => {
        const { basemodel_cddbasetemp, basemodel_hddbasetemp, basemodel_chw__deleted, basemodel_ele__deleted, basemodel_stm__deleted, 
            basemodel_gas__deleted, basemodel_hhw__deleted, basemodel_cdd_rsq, basemodel_hdd_rsq, basemodel_cdd_cvrmse, basemodel_hdd_cvrmse} = req.body;
        const { projectid } = req.params;

        try {

            const basemodel = await pool.query(`UPDATE prjt_model_base SET basemodel_cddbasetemp = $1, basemodel_hddbasetemp = $2, basemodel_chw__deleted = $3, basemodel_ele__deleted = $4, basemodel_stm__deleted = $5, 
            basemodel_gas__deleted = $6, basemodel_hhw__deleted = $7, basemodel_cdd_rsq = $8, basemodel_hdd_rsq = $9, basemodel_cdd_cvrmse = $10, basemodel_hdd_cvrmse = $11  WHERE projectid = $12`, [

                basemodel_cddbasetemp, basemodel_hddbasetemp, basemodel_chw__deleted, basemodel_ele__deleted, basemodel_stm__deleted, basemodel_gas__deleted, 
                basemodel_hhw__deleted, basemodel_cdd_rsq, basemodel_hdd_rsq, basemodel_cdd_cvrmse, basemodel_hdd_cvrmse, projectid 
            ]);

            return res.json(basemodel, {message: "basemodel data has been updated"});
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deleteBasemodelData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const basemodel = await pool.query("DELETE FROM prjt_model_base WHERE projectid = $1", [
                projectid
            ]);

            return res.json(basemodel, {message: "basemodel data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
};
