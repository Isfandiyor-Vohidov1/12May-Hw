import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller.js';

const router = new Router();

router
    .get('/', CategoryController.getAllController)
    .get('/:id', CategoryController.getOneController)
    .post('/', CategoryController.createController)
    .put('/:id', CategoryController.updateController)
    .delete('/:id', CategoryController.deleteController)

export default router;
