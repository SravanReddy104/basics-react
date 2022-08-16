import ReactDom from "react-dom";

// import {Button} from "@material-ui/core";
// import  VisibilityOffIcon  from "@material-ui/icons/VisibilityOff";
// import  VisibilityIcon  from "@material-ui/icons/Visibility";
// import HttpsIcon from "@material-ui/icons/Https"

// import Use from "./Use";
// import Templ from "./Templ";
import "./scrol.css";
const Scrol = () => {
  return (
    <div className="app">
      <p> home </p> <p> home </p> <p> home </p> <p> home </p> <p> home </p>{" "}
      <p> home </p> <p> home </p> <p> home </p> <p> home </p> <p> home </p>{" "}
      <p> home </p> <p> home </p> <p> home </p>{" "}
    </div>
  );
};

ReactDom.render(<Scrol />, document.getElementById("root"));
