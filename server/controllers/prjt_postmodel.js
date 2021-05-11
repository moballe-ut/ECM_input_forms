const pool = require('../models/db');

module.exports = {

    //Create data
    createPostmodelData: async (req, res, next) => {
        const { projectid, postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, postmodel_stm__deleted, postmodel_gas__deleted, postmodel_hhw__deleted, 
           postmodel_cdd_rsq, postmodel_hdd_rsq, postmodel_cdd_cvrmse, postmodel_hdd_cvrmse, } = req.body;

            try {

                const postModel = await pool.query(`INSERT INTO prjt_model_post (projectid, postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, 
                    postmodel_stm__deleted, postmodel_gas__deleted, postmodel_hhw__deleted,postmodel_cdd_rsq, postmodel_hdd_rsq, postmodel_cdd_cvrmse,postmodel_hdd_cvrmse) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [
                        projectid, postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, postmodel_stm__deleted, postmodel_gas__deleted, 
                        postmodel_hhw__deleted, postmodel_cdd_rsq, postmodel_hdd_rsq, postmodel_cdd_cvrmse,postmodel_hdd_cvrmse
                    ]);
                    
                    return res.json(postModel);

            } catch (error) {

                console.error(error.message);
                return res.status(500).json(error);

            };
    },

    //Get all data
    getPostmodelData: async (req, res) => {

        try {

            const postModel = await pool.query("SELECT * FROM prjt_model_post");

            return res.json(postModel.rows);
            
        } catch (error) {

            console.error(error.message);
                return res.status(500).json(error);
            
        };
    },


    // Get a specific data point based on primary key
    getOnePostmodelData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const postModel = await pool.query("SELECT * FROM prjt_model_post WHERE projectid = $1", [
                projectid
            ]);

            return res.json(postModel.rows);

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

     //Update data
     updatePostmodelData: async(req , res) => {
        const { postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, postmodel_stm__deleted, 
            postmodel_gas__deleted, postmodel_hhw__deleted, postmodel_cdd_rsq, postmodel_hdd_rsq, postmodel_cdd_cvrmse,postmodel_hdd_cvrmse } = req.body;
        
        const { projectid } = req.params;

        try {

            const postModel = await pool.query(`UPDATE prjt_model_post SET postmodel_cddbasetemp = $1, postmodel_hddbasetemp = $2, postmodel_chw__deleted = $3, postmodel_ele__deleted = $4, 
            postmodel_stm__deleted = $5, postmodel_gas__deleted = $6, postmodel_hhw__deleted = $7, postmodel_cdd_rsq = $8, postmodel_hdd_rsq = $9, postmodel_cdd_cvrmse = $10, 
           postmodel_hdd_cvrmse = $11, WHERE projectid = $12 `, [

                postmodel_cddbasetemp, postmodel_hddbasetemp, postmodel_chw__deleted, postmodel_ele__deleted, postmodel_gas__deleted, postmodel_hhw__deleted, 
                       postmodel_cdd_rsq, postmodel_cdd_cvrmse,postmodel_hdd_cvrmse, postmodel_hdd_rsq, postmodel_stm__deleted, projectid 
            ]);

            return res.json(postModel, {message: "post model data has been updated"});
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deletePostmodelData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const postModel = await pool.query("DELETE FROM prjt_model_post WHERE projectid = $1", [
                projectid
            ]);

            return res.json(postModel, {message: "post model data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
}