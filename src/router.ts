import { Request, Response, Router } from 'express';
import { createCategory } from './app/useCases/Category/createCategory';
import { listCategories } from './app/useCases/Category/listCategories';

export const appRouter = Router();


// List categories
appRouter.get('/api/categories', listCategories);

//Create category
appRouter.post('/api/categories', createCategory);

// List Products
appRouter.get('/api/products', (req,res) => {
    res.send('Ok');
});

// Create product
appRouter.post('/api/products', (req,res) => {
    res.send('Ok');
});

// Get product by category
appRouter.get('/api/:categorie/products', (req,res) => {
    res.send('Ok');
});

// List orders
appRouter.get('/api/orders', (req,res) => {
    res.send('Ok');
});
// Create order
appRouter.post('/api/orders', (req,res) => {
    res.send('Ok');
});

//Change order status
appRouter.patch('/api/orders/:orderId', (req,res) => {
    res.send('Ok');
});

// delete/cancel order
appRouter.delete('/api/orders/:orderId', (req,res) => {
    res.send('Ok');
});
