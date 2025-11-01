
import * as userController from '../controller/user.controller'



export const userRoutes =(app:any)=>{
    app.get('/users',userController.getAllusers)

}

