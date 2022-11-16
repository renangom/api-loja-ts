import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req:Request, res: Response) {
    try{

        const imagePath = req.file?.filename;
        const {name, description, price, ingredients, category} = req.body;

        if(!name){
            return res.status(400).json('Name is required');

        }
        if(!description){
            return res.status(400).json('description is required');
        }
        if(!price){
            return res.status(400).json('Price is required');
        }
        if(!ingredients){
            return res.status(400).json('Ingredients is required');
        }

        const newProduct = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price),
            ingredients: ingredients ? JSON.parse(ingredients) : [],
            category});

        res.status(201).json(newProduct);
    }catch(err){
        console.log(err);
    }
}
