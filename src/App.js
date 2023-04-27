import "./App.css";
import React, { Component, useState } from "react";
import Menu from "./Components/Menu";
import Loading from "./Components/Loading";
import Play from "./Components/Game";
import Info from "./Components/Main Page/info";
import { Col, Container, Row } from "reactstrap";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={mainPage()} />
        <Route exact path="/play" element={playPage()} />
      </Routes>
    </div>
  );
}

function playPage() {
  return (
    <Container>
      <nav>
        <Row className="menu">
          <Menu />
        </Row>
      </nav>

      <br />

      <Row>
        {/* Play */}
        <Col xs="12">
          <Play />
        </Col>
      </Row>
    </Container>
  );
}

function mainPage() {
  return (
    <Container>
      <nav>
        <Row className="menu">
          <Menu />
        </Row>
      </nav>
      <br />
      <Row>
        {/* Main Page */}
        <Info />
      </Row>
    </Container>
  );
}

export default App;
