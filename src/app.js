import express from 'express';
import { config } from 'dotenv';

import categoryRoutes from './routes/category.routes.js';
import productRoutes from './routes/product.routes.js';

config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

app.listen(PORT, () => {
    console.log(`Server connected successfully on port ${PORT}`);
});
