import * as reviewsRepository from "../repository/reviews.repository";

export const fetchAllReviews = async () => {
  return await reviewsRepository.getAllReviews();
};

export const fetchReviewById = async (reviewId: number) => {
  return await reviewsRepository.getReviewById(reviewId);
};

export const addNewReview = async (reviewData: any) => {
    return await reviewsRepository.createReview(reviewData);
}

export const removeReview = async (reviewId: number) => {
    const review = await reviewsRepository.getReviewById(reviewId);
    if (!review) {
        throw new Error("Review not found");
    }
   const result = await reviewsRepository.deleteReview(reviewId);
   return result;
}