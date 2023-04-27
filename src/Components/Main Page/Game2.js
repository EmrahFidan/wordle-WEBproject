import React, { Component, useState } from "react";
import { Progress, Form, FormGroup, Label, Input } from "reactstrap";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WORDS: [{word:"emrah"}],
      title: "Guess List",
      button: "Tips",
      infos: [
        {
          info: "Starting with a word with common letters is a good approach, as it allows you to quickly eliminate many words.",
        },
        {
          info: "Start with the same word every time. Although there is no guaranteed success rate, starting with the same word every time can give you a basic strategy for each game.",
        },
        {
          info: "Start with a word that contains a lot of vowels.Some Wordle players have found success in starting with a word that has several vowels in it.",
        },
        {
          info: "Select two different words for the first two lines. Following your first guess with a word that contains completely different letters can help you find success with Wordle because part of the game is related to the elimination process.",
        },
        { info: "There may be more than one letter in a word" },
        {
          info: "You can find that the word you are looking for has letters of genius by making a completely different guess from your previous predictions.",
        },
        {
          info: "There is no possibility that the word is meaningless, do not make senseless predictions.",
        },
      ],
      guess: "",
      guesses: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getRandomInfo = this.getRandomInfo.bind(this);
  }

  handleChange(event) {
    this.setState({ guess: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.guess.length !== 5) {
      alert("Your guess should be 5 letters long");
    } else {
      const newGuesses = [...this.state.guesses, this.state.guess];
      this.setState({ guesses: newGuesses, guess: "" });
    }
  }

  getRandomInfo() {
    const randomIndex = Math.floor(Math.random() * this.state.infos.length);
    const randomInfo = this.state.infos[randomIndex].info;
    this.setState({ randomInfo });
  }

  render() {

    const guesses = this.state.guesses;
    const lastSixGuesses = guesses.slice(-6); // Son 6 elemanı alır
    const guessList = lastSixGuesses
      .reverse()
      .map((guess, index) => <li key={index}>{guess}</li>);
      

    function openNewPage() {
      window.location.href = "http://localhost:3000/play";
    }

    return (
      <div>
        <nav className="nav-tips">
          <br></br>
          <div id="tips-constant">
            <h2 className="guess-list">{this.state.title}</h2>
            <hr className="line" />

            <div className="guess-list">
              <ul className="list-ul">{guessList}</ul>
            </div>
          </div>
          <br></br>
          <button id="tips-button" onClick={this.getRandomInfo}>
            <h3>{this.state.button}</h3>
          </button>
          <br></br>
          <br></br>
          <p id="tips">{this.state.randomInfo}</p>
        </nav>
        <nav className="nav-wordle">
          <div className="board">
            <div className="row-box1">
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
            </div>
            <div className="row-box2">
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
            </div>
            <div className="row-box3">
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
            </div>
            <div className="row-box4">
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
            </div>
            <div className="row-box5">
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
            </div>
            <div className="row-box6">
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
              <div className="word-box"></div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Progress id="progress" color="secondary" value={20} />
            {/* <Progress id="progress" color="warning" value={50} /> */}
            {/* <Progress id="progress" color="success" value={80} /> */}
          </div>
          <div className="letter">
            <div className="write-guess">
              <Form>
                <FormGroup>
                  <div className="loader">
                    <div className="cell d-0"></div>
                    <div className="cell d-1"></div>
                    <div className="cell d-2"></div>

                    <div className="cell d-1"></div>
                    <div className="cell d-2"></div>

                    <div className="cell d-2"></div>
                    <div className="cell d-3"></div>

                    <div className="cell d-3"></div>
                    <div className="cell d-4"></div>
                  </div>
                  <Label for="guess-enter">
                    <span className="guess-header">Enter your guess: </span>
                  </Label>
                  <Input
                    className="input-guess"
                    type="text"
                    value={this.state.guess}
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <button className="check" onClick={this.handleClick}>
                  {" "}
                  Check!!
                </button>

                <h4 className="win-lose"></h4>
                {/* <h4 className="win-lose">🏆Winner</h4> */}
                {/* <h4 className="win-lose">👎Loser</h4> */}
              </Form>
            </div>

            <div className="operation">
              <div className="row-letter">
                <div className="letter-box">a</div>
                <div className="letter-box">b</div>
                <div className="letter-box">c</div>
                <div className="letter-box">ç</div>
                <div className="letter-box">d</div>
                <div className="letter-box">e</div>
                <div className="letter-box">f</div>
                <div className="letter-box">g</div>
              </div>
              <div className="row-letter">
                <div className="letter-box">ğ</div>
                <div className="letter-box">h</div>
                <div className="letter-box">i</div>
                <div className="letter-box">ı</div>
                <div className="letter-box">j</div>
                <div className="letter-box">k</div>
                <div className="letter-box">l</div>
                <div className="letter-box">m</div>
              </div>
              <div className="row-letter">
                <div className="letter-box">n</div>
                <div className="letter-box">o</div>
                <div className="letter-box">ö</div>
                <div className="letter-box">p</div>
                <div className="letter-box">r</div>
                <div className="letter-box">s</div>
                <div className="letter-box">ş</div>
                <div className="letter-box">t</div>
              </div>
              <div className="row-letter">
                <div className="letter-box">u</div>
                <div className="letter-box">ü</div>
                <div className="letter-box">v</div>
                <div className="letter-box">y</div>
                <div className="letter-box">z</div>
                <div className="space-box"></div>
                <div className="double-box">DELETE</div>
              </div>
            </div>

            <div className="result">
              <div class="buttons">
                <button onClick={openNewPage} class="btn">
                  <span></span>
                  <p data-text="start!" data-title="new game"></p>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Game;
