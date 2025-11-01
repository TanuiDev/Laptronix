
import * as userController from '../controller/user.controller'



export const userRoutes =(app:any)=>{
    app.get('/users',userController.getAllusers);
    app.get('/user/:emailAddress',userController.getUserByEmail);

}

