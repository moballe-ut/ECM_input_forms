const pool = require('../models/db');

module.exports = {
    
     //Create Data
     createHoursData: async(req, res) => {
        const { projectid, hoursimp_emo, hoursimp_analysts, hoursimp_maintenance, hoursimp_ets, 
           hoursimp_bot, hoursimp_otherut, hoursimp_emo, hoursann_analysts, hoursann_maintenance, hoursann_ets, hoursann_bot, hoursann_otherut } = req.body;

            try {

                const hours = await pool.query(`INSERT INTO prjt_hours ( projectid, hoursimp_emo, hoursimp_analysts, hoursimp_maintenance, hoursimp_ets, 
                   hoursimp_bot, hoursimp_otherut, hoursimp_emo, hoursann_analysts, hoursann_maintenance, hoursann_ets, hoursann_bot, hoursann_otherut)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`, [
                        projectid, hoursimp_emo, hoursimp_analysts, hoursimp_maintenance, hoursimp_ets, 
                       hoursimp_bot, hoursimp_otherut, hoursimp_emo, hoursann_analysts, hoursann_maintenance, hoursann_ets, hoursann_bot, hoursann_otherut
                    ]);

                    return res.json(hours);
                
            } catch (error) {

                console.error(error.message);
                return res.status(500).json(error);
                
            };
    },

     //Get all data
     getHoursData: async (req, res) => {

        try {

            const hours = await pool.query("SELECT * FROM prjt_hours");

            return res.json(hours.rows);
            
        } catch (error) {

            console.error(error.message);
                return res.status(500).json(error);
            
        };
    },


    // Get a specific data point based on primary key
    getOneHoursData: async (req, res) => {

        const { projectid } = req.params;

        try {
            
            const hours = await pool.query("SELECT * FROM prjt_hours WHERE projectid = $1", [
                projectid
            ]);

            return res.json(hours.rows);

        } catch (error) {

             
            console.error(error.message);
            return res.status(500).json(error);
            
        };

    },

     //Update data
     updateHoursData: async(req , res) => {
        const { hoursimp_emo, hoursimp_analysts, hoursimp_maintenance, hoursimp_ets, 
           hoursimp_bot, hoursimp_otherut, hoursimp_emo, hoursann_analysts, hoursann_maintenance, hoursann_ets, hoursann_bot, hoursann_otherut } = req.body;
        const { projectid } = req.params;

        try {

            const hours = await pool.query(`UPDATE prjt_hours SET hoursimp_emo = $1, hoursimp_analysts = $2, hoursimp_maintenance = $3, hoursimp_ets = $4,hoursimp_bot = $5, 
            hoursimp_otherut = $6, hoursimp_emo = $7, hoursann_analysts = $8, hoursann_maintenance, = $9, 
            hoursann_ets = $10, hoursann_bot = $11, hoursann_otherut = $12 WHERE projectid = $13`, [

             hoursimp_emo, hoursimp_analysts, hoursimp_maintenance, hoursimp_ets, 
            hoursimp_bot, hoursimp_otherut, hoursimp_emo, hoursann_analysts, hoursann_maintenance, hoursann_ets, hoursann_bot, hoursann_otherut, projectid 
            ]);

            return res.json(hours, {message: "hours data has been updated"});
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };  
    },

    //Delete data
    deleteHoursData: async(req, res) => {
        const { projectid } = req.params;

        try {

            const hours = await pool.query("DELETE FROM prjt_hours WHERE projectid = $1", [
                projectid
            ]);

            return res.json(hours, {message: "costs data data has been deleted"});
            
        } catch (error) {

            console.error(error.message);
            return res.status(500).json(error);
            
        };

    }
}