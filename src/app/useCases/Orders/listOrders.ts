import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(res:Response, req: Request) {
    try{
        const orders = await Order.find();

        if(!orders){
            res.status(400).json('There are not orders');
        }

        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
}
