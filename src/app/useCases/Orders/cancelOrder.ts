import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function cancelOrder(req:Request, res: Response){
    try{
        const {orderId} = req.params;

        const order = await Order.findById(orderId);

        if(!order){
            res.status(400).json({error: 'There is no order'});
        }

        await Order.findByIdAndDelete(orderId);

        res.status(204);
    }catch(err){
        res.status(500).json(err);
    }
}
