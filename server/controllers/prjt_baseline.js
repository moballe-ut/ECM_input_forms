const pool = require('../models/db');

module.exports = {
    //Create data
    createBaselineData: async(req, res) => {
        const { projectid, baseline_chw_tonhr, baseline_ele_kwh, baseline_stm_lb, 
            baseline_gas_ccf, baseline_hhw_mmbtu, baseline_peakchw_ton, baseline_maintenancehours, baseline_wtr_kgal} = req.body;

        try {
            const baseline = await pool.query
            (`INSERT INTO prjt_baseline (projectid, baseline_chw_tonhr, baseline_ele_kwh, baseline_stm_lb, baseline_gas_ccf, 
                baseline_hhw_mmbtu, baseline_peakchw_ton, baseline_maintenancehours, baseline_wtr_kgal) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [
                projectid, baseline_chw_tonhr, baseline_ele_kwh, baseline_stm_lb, baseline_gas_ccf, 
                baseline_hhw_mmbtu, baseline_peakchw_ton, baseline_maintenancehours, baseline_wtr_kgal
            ]);

            return res.json(baseline);

        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
        };
    },

    //Get all data
    getBaselineData: async(req, res) => {
        
        try {
            
            const baseline = await pool.query("SELECT * FROM prjt_baseline");

            return res.json(baseline.rows);

        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };
    },

    // Get a specific data point based on primary key
    getOneBaselineData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const baseline = await pool.query("SELECT * FROM prjt_baseline WHERE projectid = $1", [
                projectid
            ]);

            return res.json(baseline.rows)

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

    //Update data
    updateBaselineData: async(req , res) => {
        const { baseline_chw_tonhr, baseline_ele_kwh, baseline_stm_lb, baseline_gas_ccf, 
            baseline_hhw_mmbtu, baseline_peakchw_ton, baseline_maintenancehours, baseline_wtr_kgal} = req.body;
        const { projectid } = req.params;

        try {

            const baseline = await pool.query(`UPDATE prjt_baseline SET baseline_chw_tonhr = $1, baseline_ele_kwh = $2, baseline_stm_lb = $3, baseline_gas_ccf = $4, 
            baseline_hhw_mmbtu = $5, baseline_peakchw_ton = $6, baseline_maintenancehours = $7, baseline_wtr_kgal = $8 WHERE projectid = $9`, [
                baseline_chw_tonhr, baseline_ele_kwh, baseline_stm_lb, baseline_gas_ccf, 
                baseline_hhw_mmbtu, baseline_peakchw_ton, baseline_maintenancehours, baseline_wtr_kgal, projectid 
            ]);

            console.log(baseline)
            return res.json({message: "baseline data was updated"});
            
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deleteBaselineData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const baseline = await pool.query("DELETE FROM prjt_baseline WHERE projectid = $1", [
                projectid
            ]);

            console.log(baseline)
            return res.json({message: "baseline data was deleted"})
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
};
