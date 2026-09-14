const express = require('express');
const cors = require('cors');
const PORT = 3000;
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', productRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
