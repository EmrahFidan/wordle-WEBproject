import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WORDS: [
        { word: "vergi" },
        { word: "patik" },
        { word: "cezve" },
        { word: "gözde" },
        { word: "önlük" },
        { word: "radyo" },
        { word: "sehpa" },
        { word: "dolap" },
        { word: "kavun" },
        { word: "köpek" },
        { word: "merak" },
        { word: "sehpa" },
        { word: "roman" },
      ],
      randomGuess: "",
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
      letter1: "letter-box",
      letter2: "letter-box",
      letter3: "letter-box",
      letter4: "letter-box",
      letter5: "letter-box",
      letter6: "letter-box",
      letter7: "letter-box",
      letter8: "letter-box",
      letter9: "letter-box",
      letter10: "letter-box",
      letter11: "letter-box",
      letter12: "letter-box",
      letter13: "letter-box",
      letter14: "letter-box",
      letter15: "letter-box",
      letter16: "letter-box",
      letter17: "letter-box",
      letter18: "letter-box",
      letter19: "letter-box",
      letter20: "letter-box",
      letter21: "letter-box",
      letter22: "letter-box",
      letter23: "letter-box",
      letter24: "letter-box",
      letter25: "letter-box",
      letter26: "letter-box",
      letter27: "letter-box",
      letter28: "letter-box",
      letter29: "letter-box",

      classNameWord1: "word-box",
      classNameWord2: "word-box",
      classNameWord3: "word-box",
      classNameWord4: "word-box",
      classNameWord5: "word-box",
      classNameWord6: "word-box",
      classNameWord7: "word-box",
      classNameWord8: "word-box",
      classNameWord9: "word-box",
      classNameWord10: "word-box",
      classNameWord11: "word-box",
      classNameWord12: "word-box",
      classNameWord13: "word-box",
      classNameWord14: "word-box",
      classNameWord15: "word-box",
      classNameWord16: "word-box",
      classNameWord17: "word-box",
      classNameWord18: "word-box",
      classNameWord19: "word-box",
      classNameWord20: "word-box",
      classNameWord21: "word-box",
      classNameWord22: "word-box",
      classNameWord23: "word-box",
      classNameWord24: "word-box",
      classNameWord25: "word-box",
      classNameWord26: "word-box",
      classNameWord27: "word-box",
      classNameWord28: "word-box",
      classNameWord29: "word-box",
      classNameWord30: "word-box",
      randomInfo:
        "There is no possibility that the word is meaningless, do not make senseless predictions.",
      row: 1,
      row2: 1,
      game: 1,
      w11: "",
      w12: "",
      w13: "",
      w14: "",
      w15: "",
      w21: "",
      w22: "",
      w23: "",
      w24: "",
      w25: "",
      w31: "",
      w32: "",
      w33: "",
      w34: "",
      w35: "",
      w41: "",
      w42: "",
      w43: "",
      w44: "",
      w45: "",
      w51: "",
      w52: "",
      w53: "",
      w54: "",
      w55: "",
      w61: "",
      w62: "",
      w63: "",
      w64: "",
      w65: "",
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      a5: "",
      result: "",
      answer: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.getRandomInfo = this.getRandomInfo.bind(this);
  }

  componentDidMount() {
    if (this.state.game === 1) {
      const randomIndex = Math.floor(Math.random() * this.state.WORDS.length);
      const randomWord = this.state.WORDS[randomIndex].word;
      this.setState({ randomGuess: randomWord });
    }
    this.setState({ game: this.state.game + 1 });
  }

  handleChange(event) {
    this.setState({ guess: event.target.value });
  }

  handleCheck(event) {
    event.preventDefault();
    if (this.state.row2 === 1) {
      if (this.state.w11 === this.state.a1) {
        this.setState({ classNameWord1: "green-box" });
      } else if (
        this.state.w11 === this.state.a2 ||
        this.state.w11 === this.state.a3 ||
        this.state.w11 === this.state.a4 ||
        this.state.w11 === this.state.a5
      ) {
        this.setState({ classNameWord1: "yellow-box" });
      } else {
        this.setState({ classNameWord1: "grey-box" });
      }

      if (this.state.w12 === this.state.a2) {
        this.setState({ classNameWord2: "green-box" });
      } else if (
        this.state.w12 === this.state.a1 ||
        this.state.w12 === this.state.a3 ||
        this.state.w12 === this.state.a4 ||
        this.state.w12 === this.state.a5
      ) {
        this.setState({ classNameWord2: "yellow-box" });
      } else {
        this.setState({ classNameWord2: "grey-box" });
      }

      if (this.state.w13 === this.state.a3) {
        this.setState({ classNameWord3: "green-box" });
      } else if (
        this.state.w13 === this.state.a2 ||
        this.state.w13 === this.state.a1 ||
        this.state.w13 === this.state.a4 ||
        this.state.w13 === this.state.a5
      ) {
        this.setState({ classNameWord3: "yellow-box" });
      } else {
        this.setState({ classNameWord3: "grey-box" });
      }

      if (this.state.w14 === this.state.a4) {
        this.setState({ classNameWord4: "green-box" });
      } else if (
        this.state.w14 === this.state.a2 ||
        this.state.w14 === this.state.a3 ||
        this.state.w14 === this.state.a1 ||
        this.state.w14 === this.state.a5
      ) {
        this.setState({ classNameWord4: "yellow-box" });
      } else {
        this.setState({ classNameWord4: "grey-box" });
      }

      if (this.state.w15 === this.state.a5) {
        this.setState({ classNameWord5: "green-box" });
      } else if (
        this.state.w15 === this.state.a2 ||
        this.state.w15 === this.state.a3 ||
        this.state.w15 === this.state.a4 ||
        this.state.w15 === this.state.a1
      ) {
        this.setState({ classNameWord5: "yellow-box" });
      } else {
        this.setState({ classNameWord5: "grey-box" });
      }
      if (
        this.state.w11 === this.state.a1 &&
        this.state.w12 === this.state.a2 &&
        this.state.w13 === this.state.a3 &&
        this.state.w14 === this.state.a4 &&
        this.state.w15 === this.state.a5
      ) {
        this.setState({ result: "WINNER 🏆" });
      }
    } else if (this.state.row2 === 2) {
      if (this.state.w21 === this.state.a1) {
        this.setState({ classNameWord6: "green-box" });
      } else if (
        this.state.w21 === this.state.a2 ||
        this.state.w21 === this.state.a3 ||
        this.state.w21 === this.state.a4 ||
        this.state.w21 === this.state.a5
      ) {
        this.setState({ classNameWord6: "yellow-box" });
      } else {
        this.setState({ classNameWord6: "grey-box" });
      }

      if (this.state.w22 === this.state.a2) {
        this.setState({ classNameWord7: "green-box" });
      } else if (
        this.state.w22 === this.state.a1 ||
        this.state.w22 === this.state.a3 ||
        this.state.w22 === this.state.a4 ||
        this.state.w22 === this.state.a5
      ) {
        this.setState({ classNameWord7: "yellow-box" });
      } else {
        this.setState({ classNameWord7: "grey-box" });
      }

      if (this.state.w23 === this.state.a3) {
        this.setState({ classNameWord8: "green-box" });
      } else if (
        this.state.w23 === this.state.a2 ||
        this.state.w23 === this.state.a1 ||
        this.state.w23 === this.state.a4 ||
        this.state.w23 === this.state.a5
      ) {
        this.setState({ classNameWord8: "yellow-box" });
      } else {
        this.setState({ classNameWord8: "grey-box" });
      }

      if (this.state.w24 === this.state.a4) {
        this.setState({ classNameWord9: "green-box" });
      } else if (
        this.state.w24 === this.state.a2 ||
        this.state.w24 === this.state.a3 ||
        this.state.w24 === this.state.a1 ||
        this.state.w24 === this.state.a5
      ) {
        this.setState({ classNameWord9: "yellow-box" });
      } else {
        this.setState({ classNameWord9: "grey-box" });
      }

      if (this.state.w25 === this.state.a5) {
        this.setState({ classNameWord10: "green-box" });
      } else if (
        this.state.w25 === this.state.a2 ||
        this.state.w25 === this.state.a3 ||
        this.state.w25 === this.state.a4 ||
        this.state.w25 === this.state.a1
      ) {
        this.setState({ classNameWord10: "yellow-box" });
      } else {
        this.setState({ classNameWord10: "grey-box" });
      }
      if (
        this.state.w21 === this.state.a1 &&
        this.state.w22 === this.state.a2 &&
        this.state.w23 === this.state.a3 &&
        this.state.w24 === this.state.a4 &&
        this.state.w25 === this.state.a5
      ) {
        this.setState({ result: "WINNER 🏆" });
      }
    } else if (this.state.row2 === 3) {
      if (this.state.w31 === this.state.a1) {
        this.setState({ classNameWord11: "green-box" });
      } else if (
        this.state.w31 === this.state.a2 ||
        this.state.w31 === this.state.a3 ||
        this.state.w31 === this.state.a4 ||
        this.state.w31 === this.state.a5
      ) {
        this.setState({ classNameWord11: "yellow-box" });
      } else {
        this.setState({ classNameWord11: "grey-box" });
      }

      if (this.state.w32 === this.state.a2) {
        this.setState({ classNameWord12: "green-box" });
      } else if (
        this.state.w32 === this.state.a1 ||
        this.state.w32 === this.state.a3 ||
        this.state.w32 === this.state.a4 ||
        this.state.w32 === this.state.a5
      ) {
        this.setState({ classNameWord12: "yellow-box" });
      } else {
        this.setState({ classNameWord12: "grey-box" });
      }

      if (this.state.w33 === this.state.a3) {
        this.setState({ classNameWord13: "green-box" });
      } else if (
        this.state.w33 === this.state.a2 ||
        this.state.w33 === this.state.a1 ||
        this.state.w33 === this.state.a4 ||
        this.state.w33 === this.state.a5
      ) {
        this.setState({ classNameWord13: "yellow-box" });
      } else {
        this.setState({ classNameWord13: "grey-box" });
      }

      if (this.state.w34 === this.state.a4) {
        this.setState({ classNameWord14: "green-box" });
      } else if (
        this.state.w34 === this.state.a2 ||
        this.state.w34 === this.state.a3 ||
        this.state.w34 === this.state.a1 ||
        this.state.w34 === this.state.a5
      ) {
        this.setState({ classNameWord14: "yellow-box" });
      } else {
        this.setState({ classNameWord14: "grey-box" });
      }

      if (this.state.w35 === this.state.a5) {
        this.setState({ classNameWord15: "green-box" });
      } else if (
        this.state.w35 === this.state.a2 ||
        this.state.w35 === this.state.a3 ||
        this.state.w35 === this.state.a4 ||
        this.state.w35 === this.state.a1
      ) {
        this.setState({ classNameWord15: "yellow-box" });
      } else {
        this.setState({ classNameWord15: "grey-box" });
      }
      if (
        this.state.w31 === this.state.a1 &&
        this.state.w32 === this.state.a2 &&
        this.state.w33 === this.state.a3 &&
        this.state.w34 === this.state.a4 &&
        this.state.w35 === this.state.a5
      ) {
        this.setState({ result: "WINNER 🏆" });
      }
    } else if (this.state.row2 === 4) {
      if (this.state.w41 === this.state.a1) {
        this.setState({ classNameWord16: "green-box" });
      } else if (
        this.state.w41 === this.state.a2 ||
        this.state.w41 === this.state.a3 ||
        this.state.w41 === this.state.a4 ||
        this.state.w41 === this.state.a5
      ) {
        this.setState({ classNameWord16: "yellow-box" });
      } else {
        this.setState({ classNameWord16: "grey-box" });
      }

      if (this.state.w42 === this.state.a2) {
        this.setState({ classNameWord17: "green-box" });
      } else if (
        this.state.w42 === this.state.a1 ||
        this.state.w42 === this.state.a3 ||
        this.state.w42 === this.state.a4 ||
        this.state.w42 === this.state.a5
      ) {
        this.setState({ classNameWord17: "yellow-box" });
      } else {
        this.setState({ classNameWord17: "grey-box" });
      }

      if (this.state.w43 === this.state.a3) {
        this.setState({ classNameWord18: "green-box" });
      } else if (
        this.state.w43 === this.state.a2 ||
        this.state.w43 === this.state.a1 ||
        this.state.w43 === this.state.a4 ||
        this.state.w43 === this.state.a5
      ) {
        this.setState({ classNameWord18: "yellow-box" });
      } else {
        this.setState({ classNameWord18: "grey-box" });
      }

      if (this.state.w44 === this.state.a4) {
        this.setState({ classNameWord19: "green-box" });
      } else if (
        this.state.w44 === this.state.a2 ||
        this.state.w44 === this.state.a3 ||
        this.state.w44 === this.state.a1 ||
        this.state.w44 === this.state.a5
      ) {
        this.setState({ classNameWord19: "yellow-box" });
      } else {
        this.setState({ classNameWord19: "grey-box" });
      }

      if (this.state.w45 === this.state.a5) {
        this.setState({ classNameWord20: "green-box" });
      } else if (
        this.state.w45 === this.state.a2 ||
        this.state.w45 === this.state.a3 ||
        this.state.w45 === this.state.a4 ||
        this.state.w45 === this.state.a1
      ) {
        this.setState({ classNameWord20: "yellow-box" });
      } else {
        this.setState({ classNameWord20: "grey-box" });
      }
      if (
        this.state.w41 === this.state.a1 &&
        this.state.w42 === this.state.a2 &&
        this.state.w43 === this.state.a3 &&
        this.state.w44 === this.state.a4 &&
        this.state.w45 === this.state.a5
      ) {
        this.setState({ result: "WINNER 🏆" });
      }
    } else if (this.state.row2 === 5) {
      if (this.state.w51 === this.state.a1) {
        this.setState({ classNameWord21: "green-box" });
      } else if (
        this.state.w51 === this.state.a2 ||
        this.state.w51 === this.state.a3 ||
        this.state.w51 === this.state.a4 ||
        this.state.w51 === this.state.a5
      ) {
        this.setState({ classNameWord21: "yellow-box" });
      } else {
        this.setState({ classNameWord21: "grey-box" });
      }

      if (this.state.w52 === this.state.a2) {
        this.setState({ classNameWord22: "green-box" });
      } else if (
        this.state.w52 === this.state.a1 ||
        this.state.w52 === this.state.a3 ||
        this.state.w52 === this.state.a4 ||
        this.state.w52 === this.state.a5
      ) {
        this.setState({ classNameWord22: "yellow-box" });
      } else {
        this.setState({ classNameWord22: "grey-box" });
      }

      if (this.state.w53 === this.state.a3) {
        this.setState({ classNameWord23: "green-box" });
      } else if (
        this.state.w53 === this.state.a2 ||
        this.state.w53 === this.state.a1 ||
        this.state.w53 === this.state.a4 ||
        this.state.w53 === this.state.a5
      ) {
        this.setState({ classNameWord23: "yellow-box" });
      } else {
        this.setState({ classNameWord23: "grey-box" });
      }

      if (this.state.w54 === this.state.a4) {
        this.setState({ classNameWord24: "green-box" });
      } else if (
        this.state.w54 === this.state.a2 ||
        this.state.w54 === this.state.a3 ||
        this.state.w54 === this.state.a1 ||
        this.state.w54 === this.state.a5
      ) {
        this.setState({ classNameWord24: "yellow-box" });
      } else {
        this.setState({ classNameWord24: "grey-box" });
      }

      if (this.state.w55 === this.state.a5) {
        this.setState({ classNameWord25: "green-box" });
      } else if (
        this.state.w55 === this.state.a2 ||
        this.state.w55 === this.state.a3 ||
        this.state.w55 === this.state.a4 ||
        this.state.w55 === this.state.a1
      ) {
        this.setState({ classNameWord25: "yellow-box" });
      } else {
        this.setState({ classNameWord25: "grey-box" });
      }
      if (
        this.state.w51 === this.state.a1 &&
        this.state.w52 === this.state.a2 &&
        this.state.w53 === this.state.a3 &&
        this.state.w54 === this.state.a4 &&
        this.state.w55 === this.state.a5
      ) {
        this.setState({ result: "WINNER 🏆" });
      }
    } else if (this.state.row2 === 6) {
      if (this.state.w61 === this.state.a1) {
        this.setState({ classNameWord26: "green-box" });
      } else if (
        this.state.w61 === this.state.a2 ||
        this.state.w61 === this.state.a3 ||
        this.state.w61 === this.state.a4 ||
        this.state.w61 === this.state.a5
      ) {
        this.setState({ classNameWord26: "yellow-box" });
      } else {
        this.setState({ classNameWord26: "grey-box" });
      }

      if (this.state.w62 === this.state.a2) {
        this.setState({ classNameWord27: "green-box" });
      } else if (
        this.state.w62 === this.state.a1 ||
        this.state.w62 === this.state.a3 ||
        this.state.w62 === this.state.a4 ||
        this.state.w62 === this.state.a5
      ) {
        this.setState({ classNameWord27: "yellow-box" });
      } else {
        this.setState({ classNameWord27: "grey-box" });
      }

      if (this.state.w63 === this.state.a3) {
        this.setState({ classNameWord28: "green-box" });
      } else if (
        this.state.w63 === this.state.a2 ||
        this.state.w63 === this.state.a1 ||
        this.state.w63 === this.state.a4 ||
        this.state.w63 === this.state.a5
      ) {
        this.setState({ classNameWord28: "yellow-box" });
      } else {
        this.setState({ classNameWord28: "grey-box" });
      }

      if (this.state.w64 === this.state.a4) {
        this.setState({ classNameWord29: "green-box" });
      } else if (
        this.state.w64 === this.state.a2 ||
        this.state.w64 === this.state.a3 ||
        this.state.w64 === this.state.a1 ||
        this.state.w64 === this.state.a5
      ) {
        this.setState({ classNameWord29: "yellow-box" });
      } else {
        this.setState({ classNameWord29: "grey-box" });
      }

      if (this.state.w65 === this.state.a5) {
        this.setState({ classNameWord30: "green-box" });
      } else if (
        this.state.w65 === this.state.a2 ||
        this.state.w65 === this.state.a3 ||
        this.state.w65 === this.state.a4 ||
        this.state.w65 === this.state.a1
      ) {
        this.setState({ classNameWord30: "yellow-box" });
      } else {
        this.setState({ classNameWord30: "grey-box" });
      }
      if (
        this.state.w61 === this.state.a1 &&
        this.state.w62 === this.state.a2 &&
        this.state.w63 === this.state.a3 &&
        this.state.w64 === this.state.a4 &&
        this.state.w65 === this.state.a5
      ) {
        this.setState({ result: "WINNER 🎉" });
      }
      else{
        this.setState({result: "LOSER  😔"});
        this.setState({answer:"WORD =>  " + this.state.randomGuess});
      }
    }
    this.keyboard();
    this.setState({ row2: this.state.row2 + 1 });
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.guess.length !== 5) {
      alert("Your guess should be 5 letters long");
    } else {
      const newGuesses = [...this.state.guesses, this.state.guess];
      this.setState({ guesses: newGuesses, guess: "" });

      this.setState({
        a1: this.state.randomGuess.substring(0, 1),
      });
      this.setState({
        a2: this.state.randomGuess.substring(1, 2),
      });
      this.setState({
        a3: this.state.randomGuess.substring(2, 3),
      });
      this.setState({
        a4: this.state.randomGuess.substring(3, 4),
      });
      this.setState({
        a5: this.state.randomGuess.substring(4, 5),
      });

      if (this.state.row === 1) {
        this.setState({
          w11: this.state.guess.substring(0, 1),
          w12: this.state.guess.substring(1, 2),
          w13: this.state.guess.substring(2, 3),
          w14: this.state.guess.substring(3, 4),
          w15: this.state.guess.substring(4, 5),
        });
      } else if (this.state.row === 2) {
        this.setState({
          w21: this.state.guess.substring(0, 1),
          w22: this.state.guess.substring(1, 2),
          w23: this.state.guess.substring(2, 3),
          w24: this.state.guess.substring(3, 4),
          w25: this.state.guess.substring(4, 5),
        });
      } else if (this.state.row === 3) {
        this.setState({
          w31: this.state.guess.substring(0, 1),
          w32: this.state.guess.substring(1, 2),
          w33: this.state.guess.substring(2, 3),
          w34: this.state.guess.substring(3, 4),
          w35: this.state.guess.substring(4, 5),
        });
      } else if (this.state.row === 4) {
        this.setState({
          w41: this.state.guess.substring(0, 1),
          w42: this.state.guess.substring(1, 2),
          w43: this.state.guess.substring(2, 3),
          w44: this.state.guess.substring(3, 4),
          w45: this.state.guess.substring(4, 5),
        });
      } else if (this.state.row === 5) {
        this.setState({
          w51: this.state.guess.substring(0, 1),
          w52: this.state.guess.substring(1, 2),
          w53: this.state.guess.substring(2, 3),
          w54: this.state.guess.substring(3, 4),
          w55: this.state.guess.substring(4, 5),
        });
      } else if (this.state.row === 6) {
        this.setState({
          w61: this.state.guess.substring(0, 1),
          w62: this.state.guess.substring(1, 2),
          w63: this.state.guess.substring(2, 3),
          w64: this.state.guess.substring(3, 4),
          w65: this.state.guess.substring(4, 5),
        });
      }

      this.setState({ row: this.state.row + 1 });
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
            <div className="row-box">
              <div className={this.state.classNameWord1}>{this.state.w11}</div>
              <div className={this.state.classNameWord2}>{this.state.w12}</div>
              <div className={this.state.classNameWord3}>{this.state.w13}</div>
              <div className={this.state.classNameWord4}>{this.state.w14}</div>
              <div className={this.state.classNameWord5}>{this.state.w15}</div>
            </div>
            <div className="row-box">
              <div className={this.state.classNameWord6}>{this.state.w21}</div>
              <div className={this.state.classNameWord7}>{this.state.w22}</div>
              <div className={this.state.classNameWord8}>{this.state.w23}</div>
              <div className={this.state.classNameWord9}>{this.state.w24}</div>
              <div className={this.state.classNameWord10}>{this.state.w25}</div>
            </div>
            <div className="row-box">
              <div className={this.state.classNameWord11}>{this.state.w31}</div>
              <div className={this.state.classNameWord12}>{this.state.w32}</div>
              <div className={this.state.classNameWord13}>{this.state.w33}</div>
              <div className={this.state.classNameWord14}>{this.state.w34}</div>
              <div className={this.state.classNameWord15}>{this.state.w35}</div>
            </div>
            <div className="row-box">
              <div className={this.state.classNameWord16}>{this.state.w41}</div>
              <div className={this.state.classNameWord17}>{this.state.w42}</div>
              <div className={this.state.classNameWord18}>{this.state.w43}</div>
              <div className={this.state.classNameWord19}>{this.state.w44}</div>
              <div className={this.state.classNameWord20}>{this.state.w45}</div>
            </div>
            <div className="row-box">
              <div className={this.state.classNameWord21}>{this.state.w51}</div>
              <div className={this.state.classNameWord22}>{this.state.w52}</div>
              <div className={this.state.classNameWord23}>{this.state.w53}</div>
              <div className={this.state.classNameWord24}>{this.state.w54}</div>
              <div className={this.state.classNameWord25}>{this.state.w55}</div>
            </div>
            <div className="row-box">
              <div className={this.state.classNameWord26}>{this.state.w61}</div>
              <div className={this.state.classNameWord27}>{this.state.w62}</div>
              <div className={this.state.classNameWord28}>{this.state.w63}</div>
              <div className={this.state.classNameWord29}>{this.state.w64}</div>
              <div className={this.state.classNameWord30}>{this.state.w65}</div>
            </div>
            <br></br>
            <br></br>
            <h2 className="win-lose2">{this.state.result}</h2>
            <h2 className="win-lose2">{this.state.answer}</h2>
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

                <button className="write" onClick={this.handleClick}>
                  {" "}
                  Write !!
                </button>

                <button className="check" onClick={this.handleCheck}>
                  {" "}
                  Check !!
                </button>

                <p className="win-lose">
                  First click = Write button and Second click = Check button
                </p>
              </Form>
            </div>

            <div className="result">
              <div class="buttons">
                <button onClick={openNewPage} class="btn">
                  <span></span>
                  <p data-text="start!" data-title="new game"></p>
                </button>
              </div>
            </div>

            <div className="operation">
              <div className="row-letter">
                <div className={this.state.letter1}>a</div>
                <div className={this.state.letter2}>b</div>
                <div className={this.state.letter3}>c</div>
                <div className={this.state.letter4}>ç</div>
                <div className={this.state.letter5}>d</div>
                <div className={this.state.letter6}>e</div>
                <div className={this.state.letter7}>f</div>
                <div className={this.state.letter8}>g</div>
              </div>
              <div className="row-letter">
                <div className={this.state.letter9}>ğ</div>
                <div className={this.state.letter10}>h</div>
                <div className={this.state.letter11}>i</div>
                <div className={this.state.letter12}>ı</div>
                <div className={this.state.letter13}>j</div>
                <div className={this.state.letter14}>k</div>
                <div className={this.state.letter15}>l</div>
                <div className={this.state.letter16}>m</div>
              </div>
              <div className="row-letter">
                <div className={this.state.letter17}>n</div>
                <div className={this.state.letter18}>o</div>
                <div className={this.state.letter19}>ö</div>
                <div className={this.state.letter20}>p</div>
                <div className={this.state.letter21}>r</div>
                <div className={this.state.letter22}>s</div>
                <div className={this.state.letter23}>ş</div>
                <div className={this.state.letter24}>t</div>
              </div>
              <div className="row-letter">
                <div className={this.state.letter25}>u</div>
                <div className={this.state.letter26}>ü</div>
                <div className={this.state.letter27}>v</div>
                <div className={this.state.letter28}>y</div>
                <div className={this.state.letter29}>z</div>
                <div className="space-box"></div>
                <div className="space-box"></div>
                <div className="space-box"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  keyboard() {
    if (this.state.w65 === this.state.a5) {
      if (this.state.w65 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w65 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w65 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w65 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w65 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w65 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w65 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w65 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w65 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w65 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w65 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w65 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w65 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w65 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w65 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w65 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w65 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w65 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w65 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w65 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w65 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w65 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w65 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w65 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w65 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w65 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w65 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w65 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w65 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w65 === this.state.a2 ||
      this.state.w65 === this.state.a3 ||
      this.state.w65 === this.state.a4 ||
      this.state.w65 === this.state.a1
    ) {
      if (this.state.w65 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w65 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w65 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w65 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w65 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w65 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w65 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w65 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w65 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w65 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w65 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w65 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w65 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w65 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w65 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w65 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w65 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w65 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w65 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w65 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w65 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w65 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w65 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w65 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w65 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w65 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w65 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w65 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w65 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w65 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w65 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w65 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w65 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w65 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w65 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w65 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w65 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w65 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w65 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w65 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w65 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w65 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w65 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w65 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w65 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w65 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w65 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w65 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w65 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w65 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w65 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w65 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w65 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w65 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w65 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w65 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w65 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w65 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w64 === this.state.a4) {
      if (this.state.w64 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w64 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w64 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w64 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w64 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w64 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w64 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w64 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w64 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w64 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w64 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w64 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w64 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w64 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w64 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w64 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w64 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w64 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w64 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w64 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w64 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w64 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w64 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w64 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w64 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w64 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w64 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w64 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w64 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w64 === this.state.a2 ||
      this.state.w64 === this.state.a3 ||
      this.state.w64 === this.state.a1 ||
      this.state.w64 === this.state.a5
    ) {
      if (this.state.w64 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w64 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w64 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w64 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w64 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w64 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w64 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w64 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w64 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w64 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w64 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w64 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w64 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w64 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w64 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w64 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w64 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w64 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w64 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w64 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w64 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w64 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w64 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w64 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w64 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w64 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w64 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w64 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w64 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w64 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w64 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w64 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w64 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w64 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w64 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w64 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w64 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w64 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w64 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w64 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w64 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w64 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w64 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w64 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w64 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w64 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w64 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w64 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w64 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w64 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w64 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w64 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w64 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w64 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w64 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w64 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w64 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w64 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w63 === this.state.a3) {
      if (this.state.w63 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w63 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w63 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w63 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w63 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w63 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w63 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w63 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w63 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w63 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w63 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w63 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w63 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w63 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w63 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w63 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w63 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w63 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w63 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w63 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w63 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w63 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w63 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w63 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w63 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w63 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w63 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w63 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w63 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w63 === this.state.a2 ||
      this.state.w63 === this.state.a1 ||
      this.state.w63 === this.state.a4 ||
      this.state.w63 === this.state.a5
    ) {
      if (this.state.w63 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w63 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w63 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w63 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w63 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w63 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w63 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w63 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w63 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w63 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w63 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w63 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w63 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w63 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w63 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w63 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w63 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w63 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w63 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w63 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w63 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w63 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w63 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w63 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w63 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w63 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w63 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w63 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w63 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w63 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w63 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w63 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w63 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w63 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w63 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w63 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w63 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w63 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w63 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w63 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w63 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w63 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w63 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w63 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w63 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w63 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w63 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w63 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w63 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w63 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w63 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w63 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w63 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w63 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w63 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w63 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w63 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w63 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w62 === this.state.a2) {
      if (this.state.w62 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w62 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w62 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w62 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w62 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w62 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w62 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w62 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w62 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w62 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w62 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w62 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w62 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w62 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w62 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w62 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w62 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w62 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w62 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w62 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w62 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w62 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w62 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w62 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w62 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w62 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w62 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w62 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w62 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w62 === this.state.a1 ||
      this.state.w62 === this.state.a3 ||
      this.state.w62 === this.state.a4 ||
      this.state.w62 === this.state.a5
    ) {
      if (this.state.w62 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w62 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w62 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w62 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w62 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w62 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w62 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w62 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w62 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w62 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w62 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w62 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w62 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w62 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w62 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w62 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w62 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w62 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w62 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w62 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w62 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w62 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w62 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w62 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w62 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w62 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w62 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w62 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w62 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w62 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w62 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w62 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w62 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w62 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w62 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w62 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w62 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w62 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w62 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w62 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w62 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w62 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w62 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w62 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w62 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w62 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w62 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w62 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w62 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w62 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w62 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w62 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w62 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w62 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w62 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w62 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w62 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w62 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w61 === this.state.a1) {
      if (this.state.w61 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w61 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w61 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w61 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w61 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w61 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w61 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w61 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w61 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w61 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w61 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w61 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w61 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w61 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w61 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w61 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w61 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w61 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w61 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w61 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w61 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w61 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w61 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w61 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w61 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w61 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w61 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w61 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w61 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w61 === this.state.a2 ||
      this.state.w61 === this.state.a3 ||
      this.state.w61 === this.state.a4 ||
      this.state.w61 === this.state.a5
    ) {
      if (this.state.w61 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w61 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w61 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w61 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w61 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w61 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w61 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w61 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w61 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w61 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w61 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w61 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w61 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w61 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w61 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w61 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w61 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w61 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w61 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w61 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w61 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w61 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w61 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w61 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w61 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w61 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w61 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w61 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w61 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w61 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w61 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w61 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w61 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w61 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w61 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w61 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w61 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w61 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w61 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w61 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w61 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w61 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w61 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w61 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w61 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w61 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w61 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w61 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w61 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w61 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w61 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w61 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w61 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w61 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w61 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w61 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w61 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w61 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w55 === this.state.a5) {
      if (this.state.w55 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w55 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w55 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w55 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w55 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w55 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w55 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w55 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w55 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w55 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w55 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w55 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w55 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w55 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w55 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w55 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w55 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w55 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w55 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w55 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w55 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w55 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w55 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w55 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w55 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w55 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w55 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w55 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w55 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w55 === this.state.a2 ||
      this.state.w55 === this.state.a3 ||
      this.state.w55 === this.state.a4 ||
      this.state.w55 === this.state.a1
    ) {
      if (this.state.w55 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w55 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w55 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w55 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w55 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w55 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w55 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w55 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w55 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w55 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w55 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w55 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w55 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w55 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w55 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w55 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w55 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w55 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w55 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w55 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w55 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w55 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w55 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w55 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w55 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w55 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w55 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w55 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w55 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w55 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w55 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w55 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w55 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w55 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w55 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w55 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w55 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w55 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w55 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w55 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w55 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w55 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w55 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w55 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w55 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w55 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w55 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w55 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w55 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w55 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w55 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w55 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w55 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w55 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w55 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w55 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w55 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w55 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w54 === this.state.a4) {
      if (this.state.w54 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w54 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w54 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w54 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w54 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w54 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w54 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w54 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w54 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w54 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w54 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w54 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w54 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w54 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w54 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w54 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w54 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w54 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w54 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w54 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w54 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w54 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w54 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w54 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w54 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w54 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w54 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w54 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w54 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w54 === this.state.a2 ||
      this.state.w54 === this.state.a3 ||
      this.state.w54 === this.state.a1 ||
      this.state.w54 === this.state.a5
    ) {
      if (this.state.w54 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w54 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w54 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w54 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w54 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w54 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w54 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w54 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w54 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w54 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w54 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w54 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w54 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w54 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w54 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w54 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w54 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w54 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w54 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w54 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w54 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w54 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w54 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w54 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w54 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w54 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w54 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w54 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w54 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w54 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w54 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w54 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w54 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w54 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w54 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w54 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w54 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w54 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w54 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w54 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w54 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w54 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w54 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w54 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w54 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w54 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w54 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w54 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w54 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w54 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w54 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w54 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w54 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w54 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w54 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w54 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w54 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w54 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w53 === this.state.a3) {
      if (this.state.w53 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w53 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w53 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w53 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w53 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w53 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w53 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w53 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w53 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w53 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w53 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w53 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w53 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w53 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w53 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w53 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w53 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w53 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w53 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w53 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w53 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w53 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w53 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w53 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w53 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w53 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w53 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w53 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w53 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w53 === this.state.a2 ||
      this.state.w53 === this.state.a1 ||
      this.state.w53 === this.state.a4 ||
      this.state.w53 === this.state.a5
    ) {
      if (this.state.w53 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w53 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w53 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w53 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w53 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w53 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w53 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w53 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w53 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w53 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w53 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w53 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w53 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w53 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w53 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w53 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w53 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w53 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w53 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w53 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w53 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w53 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w53 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w53 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w53 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w53 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w53 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w53 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w53 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w53 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w53 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w53 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w53 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w53 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w53 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w53 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w53 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w53 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w53 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w53 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w53 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w53 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w53 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w53 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w53 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w53 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w53 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w53 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w53 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w53 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w53 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w53 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w53 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w53 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w53 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w53 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w53 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w53 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w52 === this.state.a2) {
      if (this.state.w52 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w52 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w52 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w52 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w52 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w52 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w52 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w52 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w52 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w52 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w52 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w52 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w52 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w52 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w52 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w52 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w52 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w52 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w52 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w52 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w52 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w52 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w52 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w52 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w52 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w52 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w52 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w52 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w52 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w52 === this.state.a1 ||
      this.state.w52 === this.state.a3 ||
      this.state.w52 === this.state.a4 ||
      this.state.w52 === this.state.a5
    ) {
      if (this.state.w52 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w52 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w52 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w52 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w52 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w52 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w52 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w52 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w52 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w52 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w52 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w52 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w52 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w52 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w52 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w52 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w52 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w52 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w52 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w52 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w52 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w52 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w52 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w52 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w52 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w52 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w52 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w52 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w52 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w52 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w52 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w52 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w52 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w52 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w52 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w52 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w52 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w52 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w52 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w52 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w52 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w52 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w52 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w52 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w52 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w52 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w52 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w52 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w52 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w52 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w52 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w52 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w52 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w52 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w52 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w52 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w52 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w52 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w51 === this.state.a1) {
      if (this.state.w51 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w51 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w51 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w51 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w51 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w51 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w51 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w51 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w51 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w51 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w51 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w51 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w51 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w51 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w51 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w51 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w51 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w51 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w51 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w51 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w51 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w51 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w51 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w51 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w51 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w51 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w51 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w51 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w51 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w51 === this.state.a2 ||
      this.state.w51 === this.state.a3 ||
      this.state.w51 === this.state.a4 ||
      this.state.w51 === this.state.a5
    ) {
      if (this.state.w51 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w51 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w51 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w51 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w51 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w51 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w51 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w51 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w51 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w51 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w51 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w51 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w51 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w51 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w51 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w51 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w51 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w51 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w51 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w51 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w51 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w51 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w51 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w51 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w51 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w51 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w51 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w51 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w51 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w51 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w51 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w51 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w51 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w51 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w51 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w51 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w51 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w51 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w51 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w51 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w51 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w51 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w51 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w51 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w51 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w51 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w51 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w51 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w51 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w51 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w51 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w51 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w51 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w51 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w51 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w51 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w51 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w51 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w45 === this.state.a5) {
      if (this.state.w45 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w45 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w45 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w45 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w45 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w45 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w45 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w45 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w45 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w45 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w45 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w45 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w45 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w45 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w45 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w45 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w45 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w45 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w45 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w45 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w45 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w45 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w45 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w45 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w45 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w45 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w45 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w45 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w45 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w45 === this.state.a2 ||
      this.state.w45 === this.state.a3 ||
      this.state.w45 === this.state.a4 ||
      this.state.w45 === this.state.a1
    ) {
      if (this.state.w45 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w45 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w45 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w45 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w45 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w45 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w45 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w45 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w45 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w45 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w45 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w45 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w45 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w45 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w45 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w45 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w45 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w45 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w45 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w45 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w45 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w45 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w45 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w45 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w45 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w45 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w45 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w45 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w45 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w45 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w45 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w45 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w45 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w45 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w45 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w45 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w45 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w45 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w45 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w45 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w45 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w45 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w45 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w45 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w45 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w45 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w45 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w45 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w45 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w45 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w45 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w45 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w45 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w45 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w45 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w45 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w45 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w45 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w44 === this.state.a4) {
      if (this.state.w44 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w44 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w44 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w44 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w44 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w44 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w44 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w44 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w44 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w44 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w44 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w44 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w44 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w44 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w44 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w44 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w44 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w44 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w44 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w44 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w44 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w44 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w44 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w44 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w44 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w44 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w44 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w44 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w44 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w44 === this.state.a2 ||
      this.state.w44 === this.state.a3 ||
      this.state.w44 === this.state.a1 ||
      this.state.w44 === this.state.a5
    ) {
      if (this.state.w44 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w44 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w44 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w44 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w44 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w44 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w44 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w44 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w44 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w44 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w44 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w44 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w44 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w44 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w44 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w44 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w44 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w44 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w44 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w44 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w44 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w44 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w44 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w44 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w44 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w44 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w44 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w44 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w44 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w44 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w44 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w44 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w44 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w44 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w44 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w44 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w44 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w44 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w44 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w44 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w44 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w44 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w44 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w44 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w44 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w44 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w44 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w44 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w44 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w44 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w44 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w44 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w44 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w44 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w44 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w44 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w44 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w44 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w43 === this.state.a3) {
      if (this.state.w43 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w43 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w43 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w43 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w43 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w43 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w43 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w43 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w43 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w43 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w43 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w43 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w43 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w43 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w43 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w43 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w43 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w43 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w43 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w43 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w43 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w43 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w43 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w43 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w43 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w43 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w43 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w43 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w43 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w43 === this.state.a2 ||
      this.state.w43 === this.state.a1 ||
      this.state.w43 === this.state.a4 ||
      this.state.w43 === this.state.a5
    ) {
      if (this.state.w43 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w43 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w43 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w43 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w43 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w43 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w43 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w43 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w43 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w43 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w43 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w43 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w43 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w43 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w43 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w43 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w43 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w43 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w43 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w43 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w43 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w43 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w43 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w43 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w43 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w43 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w43 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w43 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w43 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w43 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w43 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w43 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w43 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w43 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w43 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w43 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w43 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w43 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w43 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w43 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w43 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w43 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w43 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w43 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w43 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w43 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w43 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w43 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w43 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w43 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w43 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w43 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w43 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w43 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w43 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w43 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w43 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w43 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w42 === this.state.a2) {
      if (this.state.w42 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w42 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w42 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w42 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w42 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w42 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w42 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w42 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w42 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w42 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w42 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w42 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w42 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w42 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w42 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w42 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w42 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w42 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w42 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w42 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w42 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w42 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w42 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w42 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w42 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w42 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w42 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w42 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w42 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w42 === this.state.a1 ||
      this.state.w42 === this.state.a3 ||
      this.state.w42 === this.state.a4 ||
      this.state.w42 === this.state.a5
    ) {
      if (this.state.w42 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w42 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w42 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w42 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w42 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w42 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w42 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w42 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w42 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w42 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w42 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w42 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w42 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w42 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w42 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w42 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w42 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w42 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w42 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w42 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w42 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w42 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w42 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w42 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w42 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w42 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w42 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w42 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w42 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w42 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w42 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w42 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w42 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w42 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w42 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w42 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w42 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w42 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w42 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w42 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w42 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w42 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w42 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w42 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w42 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w42 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w42 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w42 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w42 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w42 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w42 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w42 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w42 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w42 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w42 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w42 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w42 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w42 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w41 === this.state.a1) {
      if (this.state.w41 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w41 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w41 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w41 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w41 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w41 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w41 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w41 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w41 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w41 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w41 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w41 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w41 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w41 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w41 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w41 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w41 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w41 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w41 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w41 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w41 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w41 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w41 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w41 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w41 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w41 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w41 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w41 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w41 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w41 === this.state.a2 ||
      this.state.w41 === this.state.a3 ||
      this.state.w41 === this.state.a4 ||
      this.state.w41 === this.state.a5
    ) {
      if (this.state.w41 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w41 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w41 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w41 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w41 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w41 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w41 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w41 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w41 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w41 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w41 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w41 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w41 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w41 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w41 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w41 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w41 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w41 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w41 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w41 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w41 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w41 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w41 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w41 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w41 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w41 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w41 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w41 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w41 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w41 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w41 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w41 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w41 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w41 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w41 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w41 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w41 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w41 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w41 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w41 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w41 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w41 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w41 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w41 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w41 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w41 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w41 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w41 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w41 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w41 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w41 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w41 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w41 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w41 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w41 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w41 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w41 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w41 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w35 === this.state.a5) {
      if (this.state.w35 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w35 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w35 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w35 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w35 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w35 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w35 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w35 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w35 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w35 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w35 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w35 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w35 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w35 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w35 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w35 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w35 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w35 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w35 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w35 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w35 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w35 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w35 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w35 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w35 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w35 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w35 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w35 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w35 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w35 === this.state.a2 ||
      this.state.w35 === this.state.a3 ||
      this.state.w35 === this.state.a4 ||
      this.state.w35 === this.state.a1
    ) {
      if (this.state.w35 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w35 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w35 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w35 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w35 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w35 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w35 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w35 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w35 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w35 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w35 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w35 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w35 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w35 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w35 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w35 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w35 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w35 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w35 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w35 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w35 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w35 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w35 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w35 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w35 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w35 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w35 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w35 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w35 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w35 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w35 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w35 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w35 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w35 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w35 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w35 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w35 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w35 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w35 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w35 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w35 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w35 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w35 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w35 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w35 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w35 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w35 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w35 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w35 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w35 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w35 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w35 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w35 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w35 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w35 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w35 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w35 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w35 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w34 === this.state.a4) {
      if (this.state.w34 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w34 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w34 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w34 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w34 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w34 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w34 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w34 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w34 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w34 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w34 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w34 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w34 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w34 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w34 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w34 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w34 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w34 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w34 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w34 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w34 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w34 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w34 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w34 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w34 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w34 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w34 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w34 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w34 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w34 === this.state.a2 ||
      this.state.w34 === this.state.a3 ||
      this.state.w34 === this.state.a1 ||
      this.state.w34 === this.state.a5
    ) {
      if (this.state.w34 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w34 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w34 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w34 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w34 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w34 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w34 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w34 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w34 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w34 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w34 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w34 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w34 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w34 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w34 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w34 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w34 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w34 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w34 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w34 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w34 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w34 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w34 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w34 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w34 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w34 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w34 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w34 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w34 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w34 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w34 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w34 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w34 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w34 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w34 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w34 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w34 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w34 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w34 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w34 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w34 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w34 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w34 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w34 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w34 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w34 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w34 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w34 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w34 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w34 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w34 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w34 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w34 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w34 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w34 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w34 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w34 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w34 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w33 === this.state.a3) {
      if (this.state.w33 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w33 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w33 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w33 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w33 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w33 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w33 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w33 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w33 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w33 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w33 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w33 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w33 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w33 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w33 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w33 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w33 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w33 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w33 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w33 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w33 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w33 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w33 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w33 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w33 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w33 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w33 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w33 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w33 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w33 === this.state.a2 ||
      this.state.w33 === this.state.a1 ||
      this.state.w33 === this.state.a4 ||
      this.state.w33 === this.state.a5
    ) {
      if (this.state.w33 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w33 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w33 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w33 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w33 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w33 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w33 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w33 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w33 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w33 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w33 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w33 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w33 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w33 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w33 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w33 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w33 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w33 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w33 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w33 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w33 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w33 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w33 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w33 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w33 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w33 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w33 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w33 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w33 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w33 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w33 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w33 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w33 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w33 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w33 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w33 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w33 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w33 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w33 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w33 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w33 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w33 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w33 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w33 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w33 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w33 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w33 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w33 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w33 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w33 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w33 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w33 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w33 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w33 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w33 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w33 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w33 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w33 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w32 === this.state.a2) {
      if (this.state.w32 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w32 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w32 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w32 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w32 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w32 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w32 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w32 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w32 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w32 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w32 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w32 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w32 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w32 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w32 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w32 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w32 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w32 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w32 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w32 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w32 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w32 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w32 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w32 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w32 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w32 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w32 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w32 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w32 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w32 === this.state.a1 ||
      this.state.w32 === this.state.a3 ||
      this.state.w32 === this.state.a4 ||
      this.state.w32 === this.state.a5
    ) {
      if (this.state.w32 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w32 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w32 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w32 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w32 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w32 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w32 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w32 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w32 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w32 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w32 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w32 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w32 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w32 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w32 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w32 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w32 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w32 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w32 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w32 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w32 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w32 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w32 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w32 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w32 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w32 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w32 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w32 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w32 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w32 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w32 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w32 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w32 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w32 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w32 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w32 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w32 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w32 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w32 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w32 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w32 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w32 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w32 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w32 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w32 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w32 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w32 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w32 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w32 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w32 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w32 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w32 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w32 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w32 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w32 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w32 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w32 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w32 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w31 === this.state.a1) {
      if (this.state.w31 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w31 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w31 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w31 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w31 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w31 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w31 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w31 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w31 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w31 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w31 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w31 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w31 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w31 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w31 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w31 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w31 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w31 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w31 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w31 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w31 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w31 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w31 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w31 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w31 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w31 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w31 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w31 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w31 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w31 === this.state.a2 ||
      this.state.w31 === this.state.a3 ||
      this.state.w31 === this.state.a4 ||
      this.state.w31 === this.state.a5
    ) {
      if (this.state.w31 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w31 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w31 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w31 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w31 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w31 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w31 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w31 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w31 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w31 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w31 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w31 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w31 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w31 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w31 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w31 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w31 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w31 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w31 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w31 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w31 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w31 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w31 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w31 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w31 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w31 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w31 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w31 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w31 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w31 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w31 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w31 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w31 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w31 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w31 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w31 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w31 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w31 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w31 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w31 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w31 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w31 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w31 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w31 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w31 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w31 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w31 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w31 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w31 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w31 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w31 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w31 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w31 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w31 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w31 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w31 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w31 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w31 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w25 === this.state.a5) {
      if (this.state.w25 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w25 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w25 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w25 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w25 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w25 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w25 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w25 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w25 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w25 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w25 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w25 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w25 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w25 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w25 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w25 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w25 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w25 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w25 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w25 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w25 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w25 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w25 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w25 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w25 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w25 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w25 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w25 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w25 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w25 === this.state.a2 ||
      this.state.w25 === this.state.a3 ||
      this.state.w25 === this.state.a4 ||
      this.state.w25 === this.state.a1
    ) {
      if (this.state.w25 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w25 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w25 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w25 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w25 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w25 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w25 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w25 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w25 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w25 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w25 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w25 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w25 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w25 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w25 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w25 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w25 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w25 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w25 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w25 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w25 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w25 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w25 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w25 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w25 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w25 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w25 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w25 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w25 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w25 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w25 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w25 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w25 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w25 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w25 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w25 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w25 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w25 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w25 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w25 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w25 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w25 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w25 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w25 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w25 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w25 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w25 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w25 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w25 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w25 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w25 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w25 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w25 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w25 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w25 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w25 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w25 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w25 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w24 === this.state.a4) {
      if (this.state.w24 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w24 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w24 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w24 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w24 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w24 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w24 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w24 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w24 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w24 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w24 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w24 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w24 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w24 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w24 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w24 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w24 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w24 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w24 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w24 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w24 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w24 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w24 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w24 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w24 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w24 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w24 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w24 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w24 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w24 === this.state.a2 ||
      this.state.w24 === this.state.a3 ||
      this.state.w24 === this.state.a1 ||
      this.state.w24 === this.state.a5
    ) {
      if (this.state.w24 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w24 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w24 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w24 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w24 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w24 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w24 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w24 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w24 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w24 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w24 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w24 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w24 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w24 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w24 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w24 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w24 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w24 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w24 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w24 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w24 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w24 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w24 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w24 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w24 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w24 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w24 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w24 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w24 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w24 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w24 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w24 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w24 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w24 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w24 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w24 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w24 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w24 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w24 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w24 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w24 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w24 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w24 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w24 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w24 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w24 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w24 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w24 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w24 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w24 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w24 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w24 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w24 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w24 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w24 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w24 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w24 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w24 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w23 === this.state.a3) {
      if (this.state.w23 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w23 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w23 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w23 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w23 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w23 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w23 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w23 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w23 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w23 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w23 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w23 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w23 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w23 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w23 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w23 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w23 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w23 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w23 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w23 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w23 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w23 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w23 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w23 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w23 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w23 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w23 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w23 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w23 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w23 === this.state.a2 ||
      this.state.w23 === this.state.a1 ||
      this.state.w23 === this.state.a4 ||
      this.state.w23 === this.state.a5
    ) {
      if (this.state.w23 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w23 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w23 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w23 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w23 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w23 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w23 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w23 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w23 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w23 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w23 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w23 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w23 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w23 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w23 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w23 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w23 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w23 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w23 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w23 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w23 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w23 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w23 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w23 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w23 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w23 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w23 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w23 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w23 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w23 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w23 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w23 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w23 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w23 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w23 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w23 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w23 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w23 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w23 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w23 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w23 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w23 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w23 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w23 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w23 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w23 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w23 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w23 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w23 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w23 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w23 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w23 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w23 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w23 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w23 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w23 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w23 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w23 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w22 === this.state.a2) {
      if (this.state.w22 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w22 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w22 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w22 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w22 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w22 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w22 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w22 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w22 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w22 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w22 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w22 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w22 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w22 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w22 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w22 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w22 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w22 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w22 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w22 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w22 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w22 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w22 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w22 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w22 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w22 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w22 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w22 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w22 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w22 === this.state.a1 ||
      this.state.w22 === this.state.a3 ||
      this.state.w22 === this.state.a4 ||
      this.state.w22 === this.state.a5
    ) {
      if (this.state.w22 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w22 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w22 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w22 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w22 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w22 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w22 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w22 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w22 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w22 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w22 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w22 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w22 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w22 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w22 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w22 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w22 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w22 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w22 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w22 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w22 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w22 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w22 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w22 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w22 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w22 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w22 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w22 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w22 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w22 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w22 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w22 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w22 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w22 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w22 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w22 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w22 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w22 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w22 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w22 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w22 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w22 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w22 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w22 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w22 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w22 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w22 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w22 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w22 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w22 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w22 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w22 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w22 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w22 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w22 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w22 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w22 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w22 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w21 === this.state.a1) {
      if (this.state.w21 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w21 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w21 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w21 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w21 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w21 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w21 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w21 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w21 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w21 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w21 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w21 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w21 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w21 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w21 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w21 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w21 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w21 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w21 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w21 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w21 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w21 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w21 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w21 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w21 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w21 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w21 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w21 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w21 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w21 === this.state.a2 ||
      this.state.w21 === this.state.a3 ||
      this.state.w21 === this.state.a4 ||
      this.state.w21 === this.state.a5
    ) {
      if (this.state.w21 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w21 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w21 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w21 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w21 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w21 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w21 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w21 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w21 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w21 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w21 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w21 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w21 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w21 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w21 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w21 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w21 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w21 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w21 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w21 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w21 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w21 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w21 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w21 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w21 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w21 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w21 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w21 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w21 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w21 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w21 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w21 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w21 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w21 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w21 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w21 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w21 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w21 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w21 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w21 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w21 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w21 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w21 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w21 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w21 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w21 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w21 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w21 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w21 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w21 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w21 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w21 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w21 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w21 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w21 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w21 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w21 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w21 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w15 === this.state.a5) {
      if (this.state.w15 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w15 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w15 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w15 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w15 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w15 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w15 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w15 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w15 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w15 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w15 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w15 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w15 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w15 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w15 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w15 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w15 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w15 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w15 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w15 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w15 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w15 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w15 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w15 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w15 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w15 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w15 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w15 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w15 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w15 === this.state.a2 ||
      this.state.w15 === this.state.a3 ||
      this.state.w15 === this.state.a4 ||
      this.state.w15 === this.state.a1
    ) {
      if (this.state.w15 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w15 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w15 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w15 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w15 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w15 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w15 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w15 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w15 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w15 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w15 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w15 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w15 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w15 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w15 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w15 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w15 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w15 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w15 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w15 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w15 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w15 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w15 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w15 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w15 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w15 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w15 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w15 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w15 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w15 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w15 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w15 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w15 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w15 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w15 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w15 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w15 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w15 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w15 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w15 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w15 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w15 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w15 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w15 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w15 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w15 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w15 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w15 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w15 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w15 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w15 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w15 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w15 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w15 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w15 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w15 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w15 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w15 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w14 === this.state.a4) {
      if (this.state.w14 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w14 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w14 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w14 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w14 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w14 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w14 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w14 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w14 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w14 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w14 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w14 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w14 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w14 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w14 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w14 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w14 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w14 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w14 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w14 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w14 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w14 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w14 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w14 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w14 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w14 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w14 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w14 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w14 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w14 === this.state.a2 ||
      this.state.w14 === this.state.a3 ||
      this.state.w14 === this.state.a1 ||
      this.state.w14 === this.state.a5
    ) {
      if (this.state.w14 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w14 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w14 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w14 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w14 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w14 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w14 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w14 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w14 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w14 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w14 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w14 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w14 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w14 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w14 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w14 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w14 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w14 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w14 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w14 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w14 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w14 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w14 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w14 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w14 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w14 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w14 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w14 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w14 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w14 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w14 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w14 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w14 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w14 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w14 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w14 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w14 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w14 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w14 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w14 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w14 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w14 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w14 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w14 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w14 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w14 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w14 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w14 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w14 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w14 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w14 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w14 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w14 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w14 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w14 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w14 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w14 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w14 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w13 === this.state.a3) {
      if (this.state.w13 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w13 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w13 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w13 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w13 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w13 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w13 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w13 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w13 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w13 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w13 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w13 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w13 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w13 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w13 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w13 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w13 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w13 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w13 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w13 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w13 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w13 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w13 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w13 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w13 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w13 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w13 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w13 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w13 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w13 === this.state.a2 ||
      this.state.w13 === this.state.a1 ||
      this.state.w13 === this.state.a4 ||
      this.state.w13 === this.state.a5
    ) {
      if (this.state.w13 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w13 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w13 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w13 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w13 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w13 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w13 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w13 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w13 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w13 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w13 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w13 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w13 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w13 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w13 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w13 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w13 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w13 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w13 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w13 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w13 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w13 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w13 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w13 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w13 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w13 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w13 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w13 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w13 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w13 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w13 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w13 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w13 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w13 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w13 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w13 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w13 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w13 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w13 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w13 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w13 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w13 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w13 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w13 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w13 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w13 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w13 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w13 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w13 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w13 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w13 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w13 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w13 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w13 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w13 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w13 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w13 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w13 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w12 === this.state.a2) {
      if (this.state.w12 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w12 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w12 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w12 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w12 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w12 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w12 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w12 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w12 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w12 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w12 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w12 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w12 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w12 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w12 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w12 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w12 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w12 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w12 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w12 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w12 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w12 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w12 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w12 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w12 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w12 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w12 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w12 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w12 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w12 === this.state.a1 ||
      this.state.w12 === this.state.a3 ||
      this.state.w12 === this.state.a4 ||
      this.state.w12 === this.state.a5
    ) {
      if (this.state.w12 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w12 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w12 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w12 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w12 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w12 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w12 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w12 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w12 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w12 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w12 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w12 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w12 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w12 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w12 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w12 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w12 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w12 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w12 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w12 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w12 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w12 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w12 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w12 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w12 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w12 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w12 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w12 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w12 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w12 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w12 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w12 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w12 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w12 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w12 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w12 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w12 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w12 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w12 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w12 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w12 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w12 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w12 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w12 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w12 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w12 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w12 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w12 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w12 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w12 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w12 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w12 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w12 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w12 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w12 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w12 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w12 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w12 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
    if (this.state.w11 === this.state.a1) {
      if (this.state.w11 === "a") {
        this.setState({ letter1: "letter-green" });
      } else if (this.state.w11 === "b") {
        this.setState({ letter2: "letter-green" });
      } else if (this.state.w11 === "c") {
        this.setState({ letter3: "letter-green" });
      } else if (this.state.w11 === "ç") {
        this.setState({ letter4: "letter-green" });
      } else if (this.state.w11 === "d") {
        this.setState({ letter5: "letter-green" });
      } else if (this.state.w11 === "e") {
        this.setState({ letter6: "letter-green" });
      } else if (this.state.w11 === "f") {
        this.setState({ letter7: "letter-green" });
      } else if (this.state.w11 === "g") {
        this.setState({ letter8: "letter-green" });
      } else if (this.state.w11 === "ğ") {
        this.setState({ letter9: "letter-green" });
      } else if (this.state.w11 === "h") {
        this.setState({ letter10: "letter-green" });
      } else if (this.state.w11 === "ı") {
        this.setState({ letter11: "letter-green" });
      } else if (this.state.w11 === "i") {
        this.setState({ letter12: "letter-green" });
      } else if (this.state.w11 === "j") {
        this.setState({ letter13: "letter-green" });
      } else if (this.state.w11 === "k") {
        this.setState({ letter14: "letter-green" });
      } else if (this.state.w11 === "l") {
        this.setState({ letter15: "letter-green" });
      } else if (this.state.w11 === "m") {
        this.setState({ letter16: "letter-green" });
      } else if (this.state.w11 === "n") {
        this.setState({ letter17: "letter-green" });
      } else if (this.state.w11 === "o") {
        this.setState({ letter18: "letter-green" });
      } else if (this.state.w11 === "ö") {
        this.setState({ letter19: "letter-green" });
      } else if (this.state.w11 === "p") {
        this.setState({ letter20: "letter-green" });
      } else if (this.state.w11 === "r") {
        this.setState({ letter21: "letter-green" });
      } else if (this.state.w11 === "s") {
        this.setState({ letter22: "letter-green" });
      } else if (this.state.w11 === "ş") {
        this.setState({ letter23: "letter-green" });
      } else if (this.state.w11 === "t") {
        this.setState({ letter24: "letter-green" });
      } else if (this.state.w11 === "u") {
        this.setState({ letter25: "letter-green" });
      } else if (this.state.w11 === "ü") {
        this.setState({ letter26: "letter-green" });
      } else if (this.state.w11 === "v") {
        this.setState({ letter27: "letter-green" });
      } else if (this.state.w11 === "y") {
        this.setState({ letter28: "letter-green" });
      } else if (this.state.w11 === "z") {
        this.setState({ letter29: "letter-green" });
      }
    } else if (
      this.state.w11 === this.state.a2 ||
      this.state.w11 === this.state.a3 ||
      this.state.w11 === this.state.a4 ||
      this.state.w11 === this.state.a5
    ) {
      if (this.state.w11 === "a") {
        this.setState({ letter1: "letter-yellow" });
      } else if (this.state.w11 === "b") {
        this.setState({ letter2: "letter-yellow" });
      } else if (this.state.w11 === "c") {
        this.setState({ letter3: "letter-yellow" });
      } else if (this.state.w11 === "ç") {
        this.setState({ letter4: "letter-yellow" });
      } else if (this.state.w11 === "d") {
        this.setState({ letter5: "letter-yellow" });
      } else if (this.state.w11 === "e") {
        this.setState({ letter6: "letter-yellow" });
      } else if (this.state.w11 === "f") {
        this.setState({ letter7: "letter-yellow" });
      } else if (this.state.w11 === "g") {
        this.setState({ letter8: "letter-yellow" });
      } else if (this.state.w11 === "ğ") {
        this.setState({ letter9: "letter-yellow" });
      } else if (this.state.w11 === "h") {
        this.setState({ letter10: "letter-yellow" });
      } else if (this.state.w11 === "ı") {
        this.setState({ letter11: "letter-yellow" });
      } else if (this.state.w11 === "i") {
        this.setState({ letter12: "letter-yellow" });
      } else if (this.state.w11 === "j") {
        this.setState({ letter13: "letter-yellow" });
      } else if (this.state.w11 === "k") {
        this.setState({ letter14: "letter-yellow" });
      } else if (this.state.w11 === "l") {
        this.setState({ letter15: "letter-yellow" });
      } else if (this.state.w11 === "m") {
        this.setState({ letter16: "letter-yellow" });
      } else if (this.state.w11 === "n") {
        this.setState({ letter17: "letter-yellow" });
      } else if (this.state.w11 === "o") {
        this.setState({ letter18: "letter-yellow" });
      } else if (this.state.w11 === "ö") {
        this.setState({ letter19: "letter-yellow" });
      } else if (this.state.w11 === "p") {
        this.setState({ letter20: "letter-yellow" });
      } else if (this.state.w11 === "r") {
        this.setState({ letter21: "letter-yellow" });
      } else if (this.state.w11 === "s") {
        this.setState({ letter22: "letter-yellow" });
      } else if (this.state.w11 === "ş") {
        this.setState({ letter23: "letter-yellow" });
      } else if (this.state.w11 === "t") {
        this.setState({ letter24: "letter-yellow" });
      } else if (this.state.w11 === "u") {
        this.setState({ letter25: "letter-yellow" });
      } else if (this.state.w11 === "ü") {
        this.setState({ letter26: "letter-yellow" });
      } else if (this.state.w11 === "v") {
        this.setState({ letter27: "letter-yellow" });
      } else if (this.state.w11 === "y") {
        this.setState({ letter28: "letter-yellow" });
      } else if (this.state.w11 === "z") {
        this.setState({ letter29: "letter-yellow" });
      }
    } else {
      if (this.state.w11 === "a") {
        this.setState({ letter1: "letter-grey" });
      } else if (this.state.w11 === "b") {
        this.setState({ letter2: "letter-grey" });
      } else if (this.state.w11 === "c") {
        this.setState({ letter3: "letter-grey" });
      } else if (this.state.w11 === "ç") {
        this.setState({ letter4: "letter-grey" });
      } else if (this.state.w11 === "d") {
        this.setState({ letter5: "letter-grey" });
      } else if (this.state.w11 === "e") {
        this.setState({ letter6: "letter-grey" });
      } else if (this.state.w11 === "f") {
        this.setState({ letter7: "letter-grey" });
      } else if (this.state.w11 === "g") {
        this.setState({ letter8: "letter-grey" });
      } else if (this.state.w11 === "ğ") {
        this.setState({ letter9: "letter-grey" });
      } else if (this.state.w11 === "h") {
        this.setState({ letter10: "letter-grey" });
      } else if (this.state.w11 === "ı") {
        this.setState({ letter11: "letter-grey" });
      } else if (this.state.w11 === "i") {
        this.setState({ letter12: "letter-grey" });
      } else if (this.state.w11 === "j") {
        this.setState({ letter13: "letter-grey" });
      } else if (this.state.w11 === "k") {
        this.setState({ letter14: "letter-grey" });
      } else if (this.state.w11 === "l") {
        this.setState({ letter15: "letter-grey" });
      } else if (this.state.w11 === "m") {
        this.setState({ letter16: "letter-grey" });
      } else if (this.state.w11 === "n") {
        this.setState({ letter17: "letter-grey" });
      } else if (this.state.w11 === "o") {
        this.setState({ letter18: "letter-grey" });
      } else if (this.state.w11 === "ö") {
        this.setState({ letter19: "letter-grey" });
      } else if (this.state.w11 === "p") {
        this.setState({ letter20: "letter-grey" });
      } else if (this.state.w11 === "r") {
        this.setState({ letter21: "letter-grey" });
      } else if (this.state.w11 === "s") {
        this.setState({ letter22: "letter-grey" });
      } else if (this.state.w11 === "ş") {
        this.setState({ letter23: "letter-grey" });
      } else if (this.state.w11 === "t") {
        this.setState({ letter24: "letter-grey" });
      } else if (this.state.w11 === "u") {
        this.setState({ letter25: "letter-grey" });
      } else if (this.state.w11 === "ü") {
        this.setState({ letter26: "letter-grey" });
      } else if (this.state.w11 === "v") {
        this.setState({ letter27: "letter-grey" });
      } else if (this.state.w11 === "y") {
        this.setState({ letter28: "letter-grey" });
      } else if (this.state.w11 === "z") {
        this.setState({ letter29: "letter-grey" });
      }
    }
  }
}
export default Game;
