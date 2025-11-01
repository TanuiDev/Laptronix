import * as userServices from '../service/user.service'

import { Request,Response}from 'express'


export const getAllusers =async (req:Request,res:Response)=>{
   try {

     const users = await userServices.fetchAllUsers()
     
    res.status(200).json({message:"Users fetched successfully",users})
    
   } catch (error) {
    res.status(500).json({message:"Server error"})    
   }
}