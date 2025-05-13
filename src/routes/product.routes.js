import { Router } from 'express';
import { ProductController } from '../controllers/product.controller.js';

const router = new Router();

router
    .get('/', ProductController.getAllController)
    .get('/:id', ProductController.getOneController)
    .post('/', ProductController.createController)
    .put('/:id', ProductController.updateController)
    .delete('/:id', ProductController.deleteController)

export default router;
