import jwt from 'jsonwebtoken'
import * as userRepositories from '../repository/user.repository'
import { newUser } from '../types/user.types'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

export const fetchAllUsers = async ()=>{
    const results = await userRepositories.getAllUsers()
    return results
}

export const getUserByEmail = async (emailAddress:string)=>{
    const user = await userRepositories.getUserByEmail(emailAddress)
    return user;

}


export const createUser = async(user:newUser)=>{
   const existingUser =await userRepositories.getUserByEmail(user.emailAddress);
   if(existingUser){
    throw new Error('User already exist')
   }
   if(user.passwordHash){
    const password = await bcrypt.hash(user.passwordHash,10) ;
    user.passwordHash =password          
   }
   
   const result = await userRepositories.createUser(user)

   return result

}

export const loginUser = async(emailAddress:string, passwordHash:string)=>{
    const user = await userRepositories.getUserByEmail(emailAddress);
    if(!user) throw new Error('User not found')
    const isMatch = await bcrypt.compare(passwordHash,user.passwordHash)    
    if(!isMatch)throw new Error('Invalid credentials')

    const payload={
        sub:user.id,
        FN:user.firstName,
        LN:user.lastName,
        role:user.userRole,
        exp:Math.floor(Date.now()/1000 +(60*60) )} 

    const secret = process.env.JWT_SECRET as string

    if(!secret)throw new Error('JWT secret not defined')
     const token = jwt.sign(payload,secret)
    return{
        message:"Login Successful",
        token,
        user:   {
            id: user.id,
            firstName: user.firstName,
            lastName:user.lastName,
            userName:user.userName,
            phoneNumber:user.phoneNumber,
            emailAddress:user.emailAddress,
            userRole:user.userRole,
            profileImage:user.profileIMage
        }
       
    }
}

export const getUserById = async(id:number)=>{

    if( isNaN(id)){
         throw new Error('Id Should be a number')
    }

        const user = await userRepositories.getUserById(id)
     if(!user){
        throw new Error ('User not found')
     }
        
     return user;    
}

export const deleteUser= async (id:number)=>{
    const user = await userRepositories.getUserById(id)
    if(!user)throw new Error('User not found')
    const results = await userRepositories.deleteUser(id)    

    return results;
}

