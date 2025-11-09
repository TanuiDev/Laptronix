import * as reviewsRepository from "../repository/reviews.repository";

export const fetchAllReviews = async () => {
  return await reviewsRepository.getAllReviews();
};