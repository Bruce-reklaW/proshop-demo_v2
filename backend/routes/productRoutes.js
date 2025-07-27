import express from 'express';
import asynchHandler from '../middleware/asyncHandler.js'; 
import Product from '../models/product_model.js';

const router = express.Router();

router.get('/', asynchHandler( async(req, res) => {
    const products = await Product.find({});
    if (!products) {
        res.status(404);
        throw new Error('Products not found');
    }
  res.json(products);
}));

router.get('/:id', asynchHandler( async(req,res) =>{
    
    const product  = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Resource not found');
    }
    res.json(product);
}))

export default router;