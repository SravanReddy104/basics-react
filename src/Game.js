import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";



import Guess from "./Guess"
const Game = () => {
    const [width, height] = useState(useWindowSize);

    const [confetti, setConfetti] = useState(false);
    setTimeout(() => {
        confetti && setConfetti(false)
    }, 700);
    return ( 
        <>
        {confetti && <Confetti width = {width}
            height = {height}
            numberOfPieces = {50000}
           />
        } 

        <h5> Guessing game using react </h5> 
        <h3> I chosen the number from 0 to 9, can you gues it for me </h3> 
        <Guess setConfetti={setConfetti}/>
    
        </>
    );

}
export default Game;


