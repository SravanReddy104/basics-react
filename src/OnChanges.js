import ReactDom from "react-dom";
import { useState } from "react";
// import {Button} from "@material-ui/core";
// import  VisibilityOffIcon  from "@material-ui/icons/VisibilityOff";
// import  VisibilityIcon  from "@material-ui/icons/Visibility";
// import HttpsIcon from "@material-ui/icons/Https"

// import Use from "./Use";
// import Templ from "./Templ";
import "./scrol.css";
const OnChanges = () => {
    const [number, setincrement] = useState("");
    const change = (e) => {
            setincrement(e.target.value);
            console.log(number);
            console.log("hello");
        }
        // const [number,setnumber] = useState(0);
        // const change = ()=>{
        //     setnumber(prev => prev +1);
        // }

    return (
         <>
        
        <div>
        
       <p> Enter the text to see in console </p> 
        <div>
        <input type = "text" onChange = { change }
        /> 
        </div> 
        <p style = {
            { fontWeight: "bold" } } > { number } </p> 
        </div> 
        </>
    );

}


ReactDom.render(<OnChanges /> , document.getElementById("root"));