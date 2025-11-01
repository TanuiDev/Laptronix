import express, { json } from 'express'
 import { userRoutes } from './router/user.router'




const initiallizeAPP =() => {
     const app = express()  

    app.use(express.json())

    userRoutes(app);


    

    return app

}


const app = initiallizeAPP()


export default app