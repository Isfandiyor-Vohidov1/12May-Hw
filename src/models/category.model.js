import { pool } from '../db/index.js';

export const CategorieModel = {
    // получить все категории
    async getAllModel() {
        const { rows } = await pool.query(
            `SELECT * FROM categories ORDER BY id`
        );
        return rows;
    },

    // получить одну категорию по id
    async getByIdModel(id) {
        const { rows } = await pool.query(
            `SELECT * FROM categories WHERE id = $1`,
            [id]
        );
        return rows[0];
    },

    // создать новую категорию
    async createModel({ name, description }) {
        const { rows } = await pool.query(
            `INSERT INTO categories(name, description)
       VALUES($1, $2)
       RETURNING *`,
            [name, description]
        );
        return rows[0];
    },

    // обновить существующую категорию
    async updateModel(id, { name, description }) {
        const { rows } = await pool.query(
            `UPDATE categories
       SET name = $1,
           description = $2
       WHERE id = $3
       RETURNING *`,
            [name, description, id]
        );
        return rows[0];
    },

    // удалить категорию
    async deleteModel(id) {
        await pool.query(
            `DELETE FROM categories WHERE id = $1`,
            [id]
        );
    },
};
