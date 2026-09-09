const express = require('express');
const cors=require('cors');
const PORT=3000;
const plantRoutes=require('./routes/plantRoutes')
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', plantRoutes);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})