import * as reviewsServices from '../service/reviews.services';

import { Request,Response } from 'express';


export const getReviews = async (req:Request,res:Response) => {
    try {
        const reviews = await reviewsServices.fetchAllReviews();
        res.status(200).json(reviews);        
    } catch (error:any) {
        res.status(500).json({"Internal server error":error.message});         
    }
}