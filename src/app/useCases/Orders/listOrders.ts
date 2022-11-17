import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req:Request, res:Response) {
    try{
        const orders = await Order.find()
            .sort({createdAt: -1})
            .populate('products.product');

        if(!orders){
            return res.status(400).json('There are not orders');
        }

        return res.status(200).json(orders);
    }catch(err){
        return res.status(500).json(err);
    }
}
