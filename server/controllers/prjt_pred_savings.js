const pool = require('../models/db');

module.exports = {

    //Create data
    createPredSavingsData: async (req, res, next) => {
        const { projectid, predsavings_chw_tonhr, predsavings_ele_kwh, predsavings_stm_lb, predsavings_gas_ccf, predsavings_hhw_mmbtu, predsavings_peakchw_ton, predsavings_maintenancehours, 
           predsavings_wtr_kgal, predsavings_misc_$uem, predsavings_misc_$ut, predsavings_misc_$aux } = req.body;

            try {

                const predSavings = await pool.query(`INSERT INTO prjt_pred_savings (projectid, predsavings_chw_tonhr, predsavings_ele_kwh, predsavings_stm_lb, predsavings_gas_ccf, 
                    predsavings_hhw_mmbtu, predsavings_peakchw_ton, predsavings_maintenancehours,predsavings_wtr_kgal, predsavings_misc_$uem, predsavings_misc_$ut,predsavings_misc_$aux) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [
                        projectid, predsavings_chw_tonhr, predsavings_ele_kwh, predsavings_stm_lb, predsavings_gas_ccf, predsavings_hhw_mmbtu, predsavings_peakchw_ton, 
                        predsavings_maintenancehours, predsavings_wtr_kgal, predsavings_misc_$uem, predsavings_misc_$ut,predsavings_misc_$aux
                    ]);
                    
                    return res.json(predSavings);

            } catch (error) {

                console.error(error.message);
                return res.status(500).json(error);

            };
    },

    //Get all data
    getPredSavingsData: async (req, res) => {

        try {

            const predSavings = await pool.query("SELECT * FROM prjt_pred_savings");

            return res.json(predSavings.rows);
            
        } catch (error) {

            console.error(error.message);
                return res.status(500).json(error);
            
        };
    },


    // Get a specific data point based on primary key
    getOnePredSavingsData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const predSavings = await pool.query("SELECT * FROM prjt_pred_savings WHERE projectid = $1", [
                projectid
            ]);

            return res.json(predSavings.rows);

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

     //Update data
     updatePredSavingsData: async(req , res) => {
        const { predsavings_chw_tonhr, predsavings_ele_kwh, predsavings_stm_lb, predsavings_gas_ccf, predsavings_hhw_mmbtu, 
            predsavings_peakchw_ton, predsavings_maintenancehours, predsavings_wtr_kgal, predsavings_misc_$uem, predsavings_misc_$ut,predsavings_misc_$aux } = req.body;
        
        const { projectid } = req.params;

        try {

            const predSavings = await pool.query(`UPDATE prjt_pred_savings SET predsavings_chw_tonhr = $1, predsavings_ele_kwh = $2, predsavings_stm_lb = $3, predsavings_gas_ccf = $4, 
            predsavings_hhw_mmbtu = $5, predsavings_peakchw_ton = $6, predsavings_maintenancehours = $7, predsavings_wtr_kgal = $8, predsavings_misc_$uem = $9, predsavings_misc_$ut = $10, 
           predsavings_misc_$aux = $11 WHERE projectid = $12 `, [

                predsavings_chw_tonhr, predsavings_ele_kwh, predsavings_stm_lb, predsavings_gas_ccf, predsavings_peakchw_ton, predsavings_maintenancehours, 
                       predsavings_wtr_kgal, predsavings_misc_$ut,predsavings_misc_$aux, predsavings_misc_$uem, predsavings_hhw_mmbtu, projectid 
            ]);

            return res.json({message: "post model data has been updated"});
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deletePredSavingsData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const predSavings = await pool.query("DELETE FROM prjt_pred_savings WHERE projectid = $1", [
                projectid
            ]);

            return res.json({message: "post model data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
}