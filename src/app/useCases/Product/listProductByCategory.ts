import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductByCategory(req:Request, res: Response) {
    try{
        const {categoryId} = req.params;
        const products = await Product.find({category: categoryId});

        if(!products){
            res.status(400).json('There are no products with this category');
        }

        res.status(200).json(products);

    }catch(err){
        res.status(500).json(err);
    }
}
