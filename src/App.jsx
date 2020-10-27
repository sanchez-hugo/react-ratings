import React, { Component } from "react";
import "./App.css";
import Ratings from "./components/Ratings";
import { faSun as regularSun } from "@fortawesome/free-regular-svg-icons";
import { faSun as solidSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          No props passed
          <Ratings />
          <hr />
          <hr />
          Only message prop passed
          <Ratings showRatingMsg />
          <hr />
          <hr />
          Only color prop passed
          <Ratings solidColor="green" />
          <hr />
          <hr />
          Icon props passed
          <Ratings regularIcon={regularMoon} solidIcon={solidMoon} solidColor="white"/>
          <hr />
          <hr />
          All props passed (color, message, and icon)
          <Ratings
            solidColor="orange"
            showRatingMsg={false}
            solidIcon={solidSun}
            regularIcon={regularSun}
          />
          <hr />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
