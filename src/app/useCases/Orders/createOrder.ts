import { Request, Response } from 'express';
import { Order } from '../../models/Order';


export async function createOrder(req: Request,res: Response) {
    try{
        const {table, products} = req.body;

        const newOrder = await Order.create({table, products});

        return res.status(201).json(newOrder);

    }catch(err){
        return res.status(500).json(err);
    }
}
