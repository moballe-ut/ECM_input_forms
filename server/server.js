const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const pool = require('./models/db')

const port = process.env.PORT || 5001

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/prjt_baseline'));
app.use('/api', require('./routes/prjt_basemodel'));
app.use('/api', require('./routes/prjt_costs'));
app.use('/api', require('./routes/prjt_funding'));
app.use('/api', require('./routes/prjt_hours'));
app.use('/api', require('./routes/prjt_metadata'));
app.use('/api', require('./routes/prjt_mv_savings'));
app.use('/api', require('./routes/prjt_postmodel'));
app.use('/api', require('./routes/prjt_pred_savings'));

app.get("/prjts", async (req, res) => {
    try {
        const prjts = await pool.query("SELECT * FROM prjts")
        return res.json(prjts.rows)
    } catch (error) {
        console.error(error.message )
    }
})
app.listen(port, () => {
    console.log(`server listening on ${port}`);
});