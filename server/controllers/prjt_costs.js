const pool = require('../models/db');

module.exports = {

    //Create data
    createCostsData: async (req, res, next) => {
        const { projectid, costimp_emo, costimp_analysts, costimp_maintenance, costimp_ets, costimp_bot, costimp_otherut, 
            costimp_materials, costimp_nonutcontract, costimp_contingency, costann_emo, costann_analysts, costann_maintenance, costann_ets, 
            costann_bot, costann_otherut, costann_materials, costann_nonutcontract, costann_contingency } = req.body;

            try {

                const costs = await pool.query(`INSERT INTO prjt_costs (projectid, costimp_emo, costimp_analysts, costimp_maintenance, costimp_ets, costimp_bot, costimp_otherut, 
                    costimp_materials, costimp_nonutcontract, costimp_contingency, costann_emo, costann_analysts, costann_maintenance, 
                    costann_ets, costann_bot, costann_otherut, costann_materials, costann_nonutcontract, costann_contingency) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`, [
                        projectid, costimp_emo, costimp_analysts, costimp_maintenance, costimp_ets, costimp_bot, costimp_otherut, 
                        costimp_materials, costimp_nonutcontract, costimp_contingency, costann_emo, costann_analysts, costann_maintenance, costann_ets, 
                        costann_bot, costann_otherut, costann_materials, costann_nonutcontract, costann_contingency
                    ]);
                    
                    return res.json(costs);

            } catch (error) {

                console.error(error.message);
                return res.status(500).json(error);

            };
    },

    //Get all data
    getCostsData: async (req, res) => {

        try {

            const costs = await pool.query("SELECT * FROM prjt_costs");

            return res.json(costs.rows);
            
        } catch (error) {

            console.error(error.message);
                return res.status(500).json(error);
            
        };
    },


    // Get a specific data point based on primary key
    getOneCostsData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const costs = await pool.query("SELECT * FROM prjt_costs WHERE projectid = $1", [
                projectid
            ]);

            return res.json(costs.rows);

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

     //Update data
     updateCostsData: async(req , res) => {
        const { costimp_emo, costimp_analysts, costimp_maintenance, costimp_ets, costimp_bot, costimp_otherut, 
            costimp_materials, costimp_nonutcontract, costimp_contingency, costann_emo, costann_analysts, costann_maintenance, costann_ets, 
            costann_bot, costann_otherut, costann_materials, costann_nonutcontract, costann_contingency } = req.body;
        const { projectid } = req.params;

        try {

            const costs = await pool.query(`UPDATE prjt_costs SET costimp_emo = $1, costimp_analysts = $2, costimp_maintenance = $3, costimp_ets = $4, costimp_bot = $5, 
            costimp_otherut = $6, costimp_materials = $7, costimp_nonutcontract = $8, costimp_contingency = $9, costann_emo = $10, costann_analysts = $11, costann_maintenance = $12, 
            costann_ets = $13, costann_bot = $14, costann_otherut = $15, costann_materials = $16, costann_nonutcontract = $17, costann_contingency = $18 WHERE projectid = $19`, [

                costimp_emo, costimp_analysts, costimp_maintenance, costimp_ets, costimp_bot, costimp_otherut, 
                        costimp_materials, costimp_nonutcontract, costimp_contingency, costann_emo, costann_analysts, costann_maintenance, costann_ets, 
                        costann_bot, costann_otherut, costann_materials, costann_nonutcontract, costann_contingency, projectid 
            ]);

            return res.json({message: "costs data has been updated"});
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deleteCostsData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const costs = await pool.query("DELETE FROM prjt_costs WHERE projectid = $1", [
                projectid
            ]);

            return res.json({message: "costs data data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
}