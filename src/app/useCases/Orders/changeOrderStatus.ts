import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req:Request, res: Response) {
    try{
        const {orderId} = req.params;
        const {status} = req.body;
        const order = await Order.findById(orderId);

        if(!order){
            return res.status(404).json('This order was not found');
        }

        if(['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
            return res.status(400).json('Status should be one of these ');
        }

        await Order.findByIdAndUpdate(orderId, {status});
        res.status(204);
        
    }catch(err){
        res.json(err).status(500);
    }
}
