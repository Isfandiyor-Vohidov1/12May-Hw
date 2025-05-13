import { ProductModel } from '../models/product.model.js';

export const ProductController = {
    async getAllController(req, res) {
        try {
            const products = await ProductModel.getAllModel();
            return res.json(products);
        } catch (err) {
            console.error('Error in getAllController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },

    async getOneController(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductModel.getByIdModel(id);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            return res.json(product);
        } catch (err) {
            console.error('Error in getOneController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },

    async createController(req, res) {
        try {
            const { name, price, category_id } = req.body;
            const newProduct = await ProductModel.createModel({ name, price, category_id });
            return res.status(201).json(newProduct);
        } catch (err) {
            console.error('Error in createController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },

    async updateController(req, res) {
        try {
            const { id } = req.params;
            const { name, price, category_id } = req.body;
            const updated = await ProductModel.updateModel(id, { name, price, category_id });
            if (!updated) {
                return res.status(404).json({ error: 'Product not found' });
            }
            return res.json(updated);
        } catch (err) {
            console.error('Error in updateController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },

    async deleteController(req, res) {
        try {
            const { id } = req.params;
            await ProductModel.deleteModel(id);
            return res.status(204).end();
        } catch (err) {
            console.error('Error in deleteController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },
};
