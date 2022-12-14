import { Request, Response, Router } from 'express';
import multer from 'multer';
import path from 'path';
import { createCategory } from './app/useCases/Category/createCategory';
import { listCategories } from './app/useCases/Category/listCategories';
import { changeOrderStatus } from './app/useCases/Orders/changeOrderStatus';
import { createOrder } from './app/useCases/Orders/createOrder';
import { listOrders } from './app/useCases/Orders/listOrders';
import { createProduct } from './app/useCases/Product/createProduct';
import { listProductByCategory } from './app/useCases/Product/listProductByCategory';
import { listProducts } from './app/useCases/Product/listProducts';

export const appRouter = Router();

// diskStorage = armazenamento em disco
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback){
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});


// List categories
appRouter.get('/api/categories', listCategories);

//Create category
appRouter.post('/api/categories', createCategory);

// List Products
appRouter.get('/api/products', listProducts);

// Create product
appRouter.post('/api/products', upload.single('image'), createProduct);

// Get product by category
appRouter.get('/api/:categoryId/products', listProductByCategory);

// List orders
appRouter.get('/api/orders', listOrders);


// Create order
appRouter.post('/api/orders', createOrder);

//Change order status
appRouter.patch('/api/orders/:orderId', changeOrderStatus);

// delete/cancel order
appRouter.delete('/api/orders/:orderId', (req,res) => {
    res.send('Ok');
});
