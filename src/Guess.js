// import ReactDom from "react-dom";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

const Guess = ({ setConfetti }) => {
  const generated = () => Math.floor(Math.random() * 10);
  const [guessedNumber, setGuessedNumber] = useState(0);
  const [generatedNumber, setGenerated] = useState(generated());
  const [guesses, setGuesses] = useState(0);
  const [matter, setMatter] = useState("");
  const guessed = (e) => {
    e.preventDefault();
    console.log(generatedNumber);
    console.log("hello");
    console.log(`the generated ${generatedNumber === guessedNumber}`);

    if (parseInt(generatedNumber) === parseInt(guessedNumber)) {
      setMatter(
        `Congratulations you chosen correct number in ${guesses} guesses`
      );

      setGenerated(generated());
      setGuesses(0);
      setConfetti(true);
    } else if (guessedNumber > generatedNumber) {
      setMatter("Your guessed number is greater than i chosen");
      setGuesses(guesses + 1);
      setGuesses(0);
    } else {
      setMatter("Your guessed number is smaller than i chosen");
      setGuesses(guesses + 1);
    }
  };
  return (
    <>
      <div>
        <h1> {matter} </h1>
        <h1> {guesses} completed till now </h1>
        <form>
          <TextField
            variant="outlined"
            onChange={(e) => setGuessedNumber(e.target.value)}
          >
            {" "}
          </TextField>
          <div>
            <pre>
              {generatedNumber}

              {guessedNumber}
            </pre>
          </div>
          <Button
            variant="outlined"
            value="Guess"
            color="secondary"
            onClick={guessed}
            type="submit"
          >
            {" "}
            Guess{" "}
          </Button>
        </form>
      </div>
    </>
  );
};
export default Guess;
