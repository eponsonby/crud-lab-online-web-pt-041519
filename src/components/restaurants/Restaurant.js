import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  render() {
    // const { restaurant } = this.props
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.delete(this.props.id)}> X </button>
          <ReviewsContainer restaurantId={this.props.restaurant.id} reviews={this.props.restaurant.reviews}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
