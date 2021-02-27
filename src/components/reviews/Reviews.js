import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = restaurantReviews.map(review => <Review key={review.id} deleteReview={deleteReview} review={review} />)
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;