const pool = require('../models/db');

module.exports = {
    createBaselineData: async(req, res) => {
        const { projectid, baseline_chw_tonhr, baseline_ele_kwh, baseline_stm_lb, baseline_gas_ccf, baseline_hhw_mmbtu, baseline_peakchw_ton, baseline_maintenancehours, baseline_wtr_kgal} = req.body;

        try {
            const baseline = await pool.query
            ('INSERT * INTO prjt_basline (projectid, baseline_chw_tonhr, baseline_ele_kwh, baseline_stm_lb, baseline_gas_ccf, baseline_hhw_mmbtu, baseline_peakchw_ton, baseline_maintenancehours, baseline_wtr_kgal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $8)', [
                projectid, baseline_chw_tonhr, baseline_ele_kwh, baseline_stm_lb, baseline_gas_ccf, baseline_hhw_mmbtu, baseline_peakchw_ton, baseline_maintenancehours, baseline_wtr_kgal
            ]);

            return res.json(baseline);

        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
        }
    },
    
    getBaselineData: async(req, res) => {
        
        try {
            
            const baseline = await pool.query("SELECT * FROM prjt_baseline");

            return res.json(baseline)

        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        }
    }
};
