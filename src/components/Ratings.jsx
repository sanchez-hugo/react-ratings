import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

class Ratings extends PureComponent {
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
            icon={this.state.rating >= ratingValue ? this.props.solidIcon : this.props.regularIcon}
            color={this.state.rating >= ratingValue ? this.props.solidColor : ""}
            role="button"
          />
        </label>
      );
    };

    return (
      <div className="container">
        <div className="row">{[...Array(5)].map(mapStar)}</div>
        {this.props.showRatingMsg ? <div className="row">Current rating is: {this.state.rating}</div> : null}
      </div>
    );
  }
}

Ratings.propTypes = {
  solidColor: PropTypes.string.isRequired,
  regularIcon: PropTypes.object.isRequired,
  solidIcon: PropTypes.object.isRequired,
  showRatingMsg: PropTypes.bool.isRequired
};

Ratings.defaultProps = {
  solidColor: "yellow",
  showRatingMsg: false,
  regularIcon: regularStar,
  solidIcon: solidStar,
}

export default Ratings;
