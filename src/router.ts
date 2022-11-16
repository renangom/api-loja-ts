import { Request, Response, Router } from 'express';
import { Category } from './app/models/category';

const appRouter = Router();


// List categories
appRouter.get('/api/categories', (req: Request, res: Response) => {
    const categories = Category.find();
    if(!categories){
        res.status(401).json('There are no categories');
    }
    res.status(200).json(categories);
});

//Create category
appRouter.post('/api/categories', (req,res) => {
    res.send('Ok');
});

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
