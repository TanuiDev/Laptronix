import * as reviewsController  from '../controller/reviews.controller';


export const reviewsRoutes = (app:any) => {
    app.get('/reviews',reviewsController.getReviews);
}