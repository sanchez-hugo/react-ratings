import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solStar } from "@fortawesome/free-solid-svg-icons";

class Ratings extends Component {
  state = {
    savedRating: 0,
    rating: 0,
  };

  setRating = (rating) => {
    this.setState((prevState) => ({ ...prevState, rating }));
  };

  setSavedRating = (savedRating) => {
    this.setState((prevState) => ({ ...prevState, savedRating }));
  };

  setBothRatings = (rating) => {
    this.setState((prevState) => ({
      ...prevState,
      rating,
      savedRating: rating,
    }));
  };

  render() {
    const mapStar = (star, index) => {
      const ratingValue = index + 1;
      return (
        <label key={ratingValue}>
          <input
            className="d-none"
            type="radio"
            name="rating"
            value={ratingValue}
            onClick={() => {
              this.setBothRatings(ratingValue);
            }}
          />
          <FontAwesomeIcon
            onMouseEnter={() => {
              this.setRating(ratingValue);
            }}
            onMouseLeave={() => {
              this.setRating(this.state.savedRating);
            }}
            icon={this.state.rating >= ratingValue ? solStar : regStar}
            color={this.state.rating >= ratingValue ? "yellow" : ""}
          />
        </label>
      );
    };

    return (
      <div className="container">
        <div className="row">{[...Array(5)].map(mapStar)}</div>
        <div className="row">Current rating is: {this.state.rating}</div>
      </div>
    );
  }

}

export default Ratings;
