import React, { Component } from "react";
import {
  Card,
  CardGroup,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
} from "reactstrap";

class info extends Component {
  state = {
    infos: [
      {
        title: "1",
        info: "If your box has turned gray as a result of your guess, that letter does not exist in the word you are looking for.",
      },
      {
        title: "2",
        info: "If your box turned yellow as a result of your guess, there is that letter in the word you are looking for, but the location of the letter is not correct.",
      },
      {
        title: "3",
        info: "If your box turned green as a result of your guess, the word you are looking for contains both that letter and its location correctly.",
      },
      {
        title: "4",
        info: "You can start a new game thanks to this button in the lower right corner of the page. Remember, each game is played on a different word, don't try to cheat, it won't work.",
      },
    ],
    boxNames: [
      { id: 1, info: "Gray Box" },
      { id: 2, info: "Yellow Box" },
      { id: 3, info: "Green Box" },
      { id: 4, info: "Restart" },
    ],
  };
  render() {
    const restart = require("../Main Page/restart.png");
    const newGame = require("../Main Page/newGame.png");

    function openNewPage() {
      window.location.href = "http://localhost:3000/play";
    }

    return (
      <div>
        <nav className="nav-card">
          <Card
            className="card"
            style={{
              width: "15rem",
            }}
          >
            <img
              alt="wordle"
              src="https://i.insider.com/61e6dfe704ce6e0018d78b59?width=1300&format=jpeg&auto=webp"
            />
            <CardBody className="card-body">
              <CardTitle tag="h2">{this.state.boxNames[0].info}</CardTitle>
              <CardText className="card-text">
                {this.state.infos[0].info}
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="card"
            style={{
              width: "15rem",
            }}
          >
            <img
              alt="wordle"
              src="https://i.insider.com/61e6dfe704ce6e0018d78b59?width=1300&format=jpeg&auto=webp"
            />
            <CardBody className="card-body">
              <CardTitle tag="h2">{this.state.boxNames[1].info}</CardTitle>
              <CardText className="card-text">
                {this.state.infos[1].info}
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="card"
            style={{
              width: "15rem",
            }}
          >
            <img
              alt="wordle"
              src="https://i.insider.com/61e6dfe704ce6e0018d78b59?width=1300&format=jpeg&auto=webp"
            />
            <CardBody className="card-body">
              <CardTitle tag="h2">{this.state.boxNames[2].info}</CardTitle>
              <CardText className="card-text">
                {this.state.infos[2].info}
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="card"
            style={{
              width: "15rem",
            }}
          >
            <img src={restart} />
            <img src={newGame} />
            <CardBody className="card-body-big">
              <CardTitle tag="h2">{this.state.boxNames[3].info}</CardTitle>
              <CardText className="card-text">
                {this.state.infos[3].info}
              </CardText>
            </CardBody>
          </Card>
        </nav>
        <nav className="nav-info">
          <div className="text-left">
            <p>
              You can use the letter boxes or your keyboard to type your guess.
            </p>
            <p>
              The delete key deletes the last letter you typed, and the clear
              button clears the prediction location.
            </p>
            <p>
              After entering your guess ( only 5-word guesses are valid ), you
              can see the coloring in the table with the check button.
            </p>
            <p>Press the TIPS button to get tips</p>
          </div>
          <div class="buttons">
            <button onClick={openNewPage} class="btn">
              <span></span>
              <p data-text="start!" data-title="Play"></p>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
export default info;
