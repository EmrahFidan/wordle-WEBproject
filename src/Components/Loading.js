import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div class="loader-big">
          <div class="cell d-0"></div>
          <div class="cell d-1"></div>
          <div class="cell d-2"></div>

          <div class="cell d-1"></div>
          <div class="cell d-2"></div>

          <div class="cell d-2"></div>
          <div class="cell d-3"></div>

          <div class="cell d-3"></div>
          <div class="cell d-4"></div>
        </div>
      </div>
    );
  }
}
