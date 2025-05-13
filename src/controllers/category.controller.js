// src/controllers/category.controller.js

import { CategorieModel } from '../models/category.model.js';

export const CategoryController = {
    async getAllController(req, res) {
        try {
            const categories = await CategorieModel.getAllModel();
            return res.json(categories);
        } catch (err) {
            console.error('Error in getAllController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },

    async getOneController(req, res) {
        try {
            const { id } = req.params;
            const category = await CategorieModel.getByIdModel(id);
            if (!category) {
                return res.status(404).json({ error: 'Category not found' });
            }
            return res.json(category);
        } catch (err) {
            console.error('Error in getOneController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },

    async createController(req, res) {
        try {
            const { name, description } = req.body;
            const newCategory = await CategorieModel.createModel({ name, description });
            return res.status(201).json(newCategory);
        } catch (err) {
            console.error('Error in createController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },

    async updateController(req, res) {
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const updated = await CategorieModel.updateModel(id, { name, description });
            if (!updated) {
                return res.status(404).json({ error: 'Category not found' });
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
            await CategorieModel.deleteModel(id);
            return res.status(204).end();
        } catch (err) {
            console.error('Error in deleteController:', err);
            return res.status(500).json({ error: 'Server error' });
        }
    },
};
