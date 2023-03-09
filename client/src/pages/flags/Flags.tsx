// React
import { useState, useEffect } from "react";

// Styles
import "./flags.css";

// Bootstrap
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

// Components
import TableRow from "../../components/TableRow";
import QuestionSkeleton from "../../skeleton/QuestionSkeleton";

// Framer Motion
import { easeInOut, motion } from "framer-motion";

type Question = {
  [key: number]: number;
  countries: Array<number>;
  flag: string;
  correct: number;
};

type RandomIndeces = {
  [key: number]: number;
  countries: Array<number>;
};

export default function Flags() {
  const [questions, setQuestions] = useState<{ [key: number]: Question }>(); // Gathers a list of countries / corresponding flags
  const [currentQuestion, incrementQuestion] = useState(0); // The question #
  const [choice, setChoice] = useState([false, false, false, false]); // The user's current choice
  const [correct, incrementCorrect] = useState(0); // How many the user has correct
  const [response, setResponse] = useState<Array<number>>([]); // The Array of user responses
  const [pageRefresh, setPageRefresh] = useState(0); // When the "Play Again" button is pressed, this state changes to run useEffect again

  function generateCountries(max: number) {
    var countryIndeces: { [key: number]: RandomIndeces } = {};
    for (let i = 0; i < 20; i++) {
      // For every question, generate a list of random indeces
      countryIndeces[i] = {
        countries: [0, 0, 0, 0],
      };
      while (new Set(countryIndeces[i].countries).size !== 4) {
        // If there's any repeat indeces, reset
        countryIndeces[i].countries[0] = Math.floor(Math.random() * (max + 1));
        countryIndeces[i].countries[1] = Math.floor(Math.random() * (max + 1));
        countryIndeces[i].countries[2] = Math.floor(Math.random() * (max + 1));
        countryIndeces[i].countries[3] = Math.floor(Math.random() * (max + 1));
      }
    }
    return countryIndeces;
  }

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all"); // Get all data from API
      const data = await response.json(); // Convert data to JSON
      var pairs: { [key: number]: Question } = {}; // Instantiate a "pairs" var to add to
      var countryIndeces = generateCountries(data.length - 1); // Generates a list of random indeces
      for (var i = 0; i < 20; i++) {
        var correct = Math.floor(Math.random() * 4); // Generates the "correct" answer
        pairs[i] = {
          // Sets the options, the index of the correct country, and the flag of the correct country
          countries: [
            data[countryIndeces[i].countries[0]].name["common"],
            data[countryIndeces[i].countries[1]].name["common"],
            data[countryIndeces[i].countries[2]].name["common"],
            data[countryIndeces[i].countries[3]].name["common"],
          ],
          flag: data[countryIndeces[i].countries[correct]].flags["svg"],
          correct: correct,
        };
      }
      setQuestions(pairs); // Sets the state of the questions list
    };
    fetchPost();
  }, [pageRefresh]); // On page refresh, start a new game

  function nextQuestion() {
    if (questions !== undefined && choice[questions[currentQuestion].correct]) {
      // If the answer is correct, increment the correctness score
      incrementCorrect(correct + 1);
    }
    if (questions !== undefined) {
      // Type-safe
      // Gets the user's input
      setResponse([
        ...response, // The full response
        questions[currentQuestion].countries[
          choice.findIndex((element) => element === true)
        ], // Add the new response before moving to next question
      ]);
    }
    setChoice([false, false, false, false]); // Reset the highlighted choice
    incrementQuestion(currentQuestion + 1); // Updates the question number
  }

  function refresh() {
    setQuestions(undefined); // Resets the questions
    incrementQuestion(0); // Resets the question number
    setChoice([false, false, false, false]); // Resets the multiple choice selection
    incrementCorrect(0); // Resets the correct answers
    setResponse([]); // Resets the response array
    setPageRefresh(pageRefresh + 1); // Change page refresh to trigger a new fetch
  }

  const tween = {
    // Sets the type of animation Framer Motion will apply to the motion div
    type: "tween",
    duration: 0.1,
    ease: easeInOut,
  };

  const transform = {
    // Multiple choice animation
    open: { transform: "scale(1)", opacity: 1 },
    closed: { transform: "scale(0)", opacity: 0.5 },
  };

  const scaleX = {
    // Progress bar animation
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  };

  return (
    <motion.div
      className="train__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Flags</h1>
      {currentQuestion !== 20 ? (
        <div>
          {questions !== undefined ? (
            <Card style={{ width: "18rem", overflow: "hidden" }} border="black">
              <p className="current__question">{currentQuestion + 1}/20</p>
              <motion.div
                className="progress__bar"
                animate={{ width: ((currentQuestion + 1) / 20) * 100 + "%" }}
                transition={scaleX}
              ></motion.div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  background: "white",
                }}
              >
                <Card.Img variant="top" src={questions[currentQuestion].flag} style={{height: '160px', objectFit: 'contain'}}/>
              </div>
              <Card.Body className="card__content">
                <Card.Title>Which country is this flag from?</Card.Title>
                <ListGroup as="ul" className="multiple__choice">
                  <ListGroup.Item
                    as="li"
                    action
                    variant={choice[0] ? "primary" : ""}
                    active={choice[0]}
                    onClick={() => setChoice([true, false, false, false])}
                    className="choice__text"
                  >
                    <span className="dot__outline">
                      <motion.span
                        className="dot"
                        transition={tween}
                        animate={choice[0] ? "open" : "closed"}
                        variants={transform}
                      ></motion.span>
                    </span>
                    <p
                      className="mutliple__choice-text"
                      style={
                        choice[0] ? { color: "white" } : { color: "black" }
                      }
                    >
                      {questions[currentQuestion].countries[0]}
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    action
                    variant={choice[1] ? "primary" : ""}
                    active={choice[1]}
                    onClick={() => setChoice([false, true, false, false])}
                    className="choice__text"
                  >
                    <span className="dot__outline">
                      <motion.span
                        className="dot"
                        transition={tween}
                        animate={choice[1] ? "open" : "closed"}
                        variants={transform}
                      ></motion.span>
                    </span>
                    <p
                      className="mutliple__choice-text"
                      style={
                        choice[1] ? { color: "white" } : { color: "black" }
                      }
                    >
                      {questions[currentQuestion].countries[1]}
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    action
                    variant={choice[2] ? "primary" : ""}
                    active={choice[2]}
                    onClick={() => setChoice([false, false, true, false])}
                    className="choice__text"
                  >
                    <span className="dot__outline">
                      <motion.span
                        className="dot"
                        transition={tween}
                        animate={choice[2] ? "open" : "closed"}
                        variants={transform}
                      ></motion.span>
                    </span>
                    <p
                      className="mutliple__choice-text"
                      style={
                        choice[2] ? { color: "white" } : { color: "black" }
                      }
                    >
                      {questions[currentQuestion].countries[2]}
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    action
                    variant={choice[3] ? "primary" : ""}
                    active={choice[3]}
                    onClick={() => setChoice([false, false, false, true])}
                    className="choice__text"
                  >
                    <span className="dot__outline">
                      <motion.span
                        className="dot"
                        transition={tween}
                        animate={choice[3] ? "open" : "closed"}
                        variants={transform}
                      ></motion.span>
                    </span>
                    <p
                      className="mutliple__choice-text"
                      style={
                        choice[3] ? { color: "white" } : { color: "black" }
                      }
                    >
                      {questions[currentQuestion].countries[3]}
                    </p>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={() => nextQuestion()}>
                  Next
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <QuestionSkeleton />
          )}
        </div>
      ) : (
        <div className="score__container">
          <Card className="score__container-top">
            <Card.Body>
              <Card.Title>Congrats!</Card.Title>
              <Card.Text style={{ color: "black" }}>Your Score:</Card.Text>
              <p style={{ color: "black" }}>{correct}/20</p>
              <Button variant="primary" onClick={() => refresh()}>
                Play Again
              </Button>
            </Card.Body>
          </Card>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Flag</th>
                <th>Your Pick</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {response.map((item, index) => (
                <TableRow
                  answer={item}
                  correct={
                    questions
                      ? questions[index].countries[questions[index].correct]
                      : -1
                  }
                  flag={questions ? questions[index].flag : "/unknown-flag.png"}
                  index={index + 1}
                  key={index}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </motion.div>
  );
}