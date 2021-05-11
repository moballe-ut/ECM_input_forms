const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

const port = process.env.PORT || 5001

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/prjt_baseline'));
app.use('/api', require('./routes/prjt_basemodel'));
app.use('/api', require('./routes/prjt_costs'));

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});