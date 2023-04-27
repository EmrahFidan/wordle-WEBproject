import React, { Component } from "react";

class Menu extends Component {
  state = {
    title: "Wordle",
    link1: "Main Page",
    link2: "Play",
  };
  render() {
    const play = require("../images/play.png");
    const home = require("../images/home.png");
    return (
      <div>
        <nav>
          <div id="logo-box">{this.state.title}</div>
          <div id="nav-links">
            <ul>
              <li class="nav-item">
                <img src={play} className="menu-link" />
                <a className="menu-link" href="http://localhost:3000/play">
                  {this.state.link2}
                </a>
              </li>
              <li class="nav-item">
                <img src={home} className="menu-link" />
                <a className="menu-link" href="http://localhost:3000/">
                  {this.state.link1}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Menu;
