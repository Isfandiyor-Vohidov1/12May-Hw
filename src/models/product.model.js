import { pool } from '../db/index.js';

export const ProductModel = {
    // получить все товары
    async getAllModel() {
        const { rows } = await pool.query(`
      SELECT p.*, c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      ORDER BY p.id
    `);
        return rows;
    },

    // получить товар по id
    async getByIdModel(id) {
        const { rows } = await pool.query(
            `SELECT * FROM products WHERE id = $1`,
            [id]
        );
        return rows[0];
    },

    // создать новый товар
    async createModel({ name, price, category_id }) {
        const { rows } = await pool.query(
            `INSERT INTO products(name, price, category_id)
       VALUES($1, $2, $3)
       RETURNING *`,
            [name, price, category_id]
        );
        return rows[0];
    },

    // обновить товар
    async updateModel(id, { name, price, category_id }) {
        const { rows } = await pool.query(
            `UPDATE products
       SET name = $1,
           price = $2,
           category_id = $3
       WHERE id = $4
       RETURNING *`,
            [name, price, category_id, id]
        );
        return rows[0];
    },

    // удалить товар
    async deleteModel(id) {
        await pool.query(
            `DELETE FROM products WHERE id = $1`,
            [id]
        );
    },
};
