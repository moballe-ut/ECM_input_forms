const pool = require('../models/db');

module.exports = {

    //Create data
    createMetaData: async (req, res, next) => {
        const { projectid, building, measure_type, status, staff_lead, staff_colead, analyst, 
            project_description, nonenergy_benefits, baseline_start_date, reporting_period_start_date, length_baseline_period_days, 
            length_reporting_period_days, baseline_end_date, reporting_period_end_date, project_fiscal_year } = req.body;

            try {

                const metadata = await pool.query(`INSERT INTO prjt_metadata (projectid, building, measure_type, status, staff_lead, staff_colead, analyst, 
                    project_description, nonenergy_benefits, baseline_start_date, reporting_period_start_date, length_baseline_period_days, length_reporting_period_days, baseline_end_date, 
                    reporting_period_end_date, project_fiscal_year) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`, [
                        projectid, building, measure_type, status, staff_lead, staff_colead, analyst, 
                        project_description, nonenergy_benefits, baseline_start_date, reporting_period_start_date, length_baseline_period_days, length_reporting_period_days, 
                        baseline_end_date, reporting_period_end_date, project_fiscal_year
                    ]);
                    
                    return res.json(metadata);

            } catch (error) {

                console.error(error.message);
                return res.status(500).json(error);

            };
    },

    //Get all data
    getMetaData: async (req, res) => {

        try {

            const metadata = await pool.query("SELECT * FROM prjt_metadata");

            return res.json(metadata.rows);
            
        } catch (error) {

            console.error(error.message);
                return res.status(500).json(error);
            
        };
    },


    // Get a specific data point based on primary key
    getOneMetaData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const metadata = await pool.query("SELECT * FROM prjt_cost WHERE projectid = $1", [
                projectid
            ]);

            return res.json(metadata.rows);

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

     //Update data
     updateMetaData: async(req , res) => {
        const { building, measure_type, status, staff_lead, staff_colead, analyst, 
            project_description, nonenergy_benefits, baseline_start_date, reporting_period_start_date, length_baseline_period_days, length_reporting_period_days, 
            baseline_end_date, reporting_period_end_date, project_fiscal_year } = req.body;
        
        const { projectid } = req.params;

        try {

            const metadata = await pool.query(`UPDATE prjt_metadata SET building = $1, measure_type = $2, status = $3, staff_lead = $4, staff_colead = $5, 
            analyst = $6, project_description = $7, nonenergy_benefits = $8, baseline_start_date = $9, reporting_period_start_date = $10, length_baseline_period_days = $11, 
            length_reporting_period_days = $12, baseline_end_date = $13, reporting_period_end_date = $14, project_fiscal_year = $15, WHERE projectid = $16 `, [

                building, measure_type, status, staff_lead, staff_colead, analyst, 
                        project_description, nonenergy_benefits, baseline_start_date, reporting_period_start_date, length_baseline_period_days, length_reporting_period_days, 
                        baseline_end_date, reporting_period_end_date, project_fiscal_year, projectid 
            ]);

            return res.json(metadata, {message: "metadata data has been updated"});
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deleteMetaData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const metadata = await pool.query("DELETE FROM prjt_metadata WHERE projectid = $1", [
                projectid
            ]);

            return res.json(metadata, {message: "metadata data data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
}