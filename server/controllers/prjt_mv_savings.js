const pool = require('../models/db');

module.exports = {

    //Create data
    createMvSavingsData: async (req, res, next) => {
        const { projectid, mvsavings_chw_tonhr, mvsavings_ele_kwh, mvsavings_stm_lb, mvsavings_gas_ccf, mvsavings_hhw_mmbtu, mvsavings_peakchw_ton, 
            mvsavings_maintenancehours, mvsavings_wtr_kgal, mvsavings_misc_$uem, mvsavings_misc_$ut, mvsavings_misc_$aux } = req.body;

            try {

                const mvSavingsdata = await pool.query(`INSERT INTO prjt_mv_savings (projectid, mvsavings_chw_tonhr, mvsavings_ele_kwh, mvsavings_stm_lb, mvsavings_gas_ccf, 
                    mvsavings_hhw_mmbtu, mvsavings_peakchw_ton, mvsavings_maintenancehours, mvsavings_wtr_kgal, mvsavings_misc_$uem, mvsavings_misc_$ut, mvsavings_misc_$aux) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [
                        projectid, mvsavings_chw_tonhr, mvsavings_ele_kwh, mvsavings_stm_lb, mvsavings_gas_ccf, mvsavings_hhw_mmbtu, mvsavings_peakchw_ton, 
                        mvsavings_maintenancehours, mvsavings_wtr_kgal, mvsavings_misc_$uem, mvsavings_misc_$ut, mvsavings_misc_$aux
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
        const { mvsavings_chw_tonhr, mvsavings_ele_kwh, mvsavings_stm_lb, mvsavings_gas_ccf, mvsavings_hhw_mmbtu, mvsavings_peakchw_ton, 
            mvsavings_maintenancehours, mvsavings_wtr_kgal, mvsavings_misc_$uem, mvsavings_misc_$ut, mvsavings_misc_$aux } = req.body;
        
        const { projectid } = req.params;

        try {

            const mvSavingsdata = await pool.query(`UPDATE prjt_mv_savings SET mvsavings_chw_tonhr = $1, mvsavings_ele_kwh = $2, mvsavings_stm_lb = $3, mvsavings_gas_ccf = $4, 
            mvsavings_hhw_mmbtu = $5, mvsavings_peakchw_ton = $6, mvsavings_maintenancehours = $7, mvsavings_wtr_kgal = $8, 
            mvsavings_misc_$uem = $9, mvsavings_misc_$ut = $10, mvsavings_misc_$aux = $11, WHERE projectid = $12 `, [

                mvsavings_chw_tonhr, mvsavings_ele_kwh, mvsavings_stm_lb, mvsavings_gas_ccf, mvsavings_hhw_mmbtu, mvsavings_peakchw_ton, 
                        mvsavings_maintenancehours, mvsavings_wtr_kgal, mvsavings_misc_$uem, mvsavings_misc_$ut, mvsavings_misc_$aux, projectid 
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

            const mvSavingsdata = await pool.query("DELETE FROM prjt_mvSavingsdata WHERE projectid = $1", [
                projectid
            ]);

            return res.json(mvSavingsdata, {message: "mvSavingsdata data data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
}