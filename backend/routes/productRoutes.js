import express from 'express';
import {getProducts, getProductById} from '../controllers/productController.js';
import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/product_model.js";

const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

export default router;