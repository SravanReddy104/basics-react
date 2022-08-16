import { useState } from "react";

import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HttpsIcon from "@material-ui/icons/Https";
import "./App.css";

const Password = () => {
  const [type, setType] = useState("text");
  return (
    <div className="app">
      <div className="register_icon">
        <HttpsIcon style={{ color: "green" }} />
        <input autoComplete="true" placeholder="password" type={type} />{" "}
        {
          <>
            {type === "password" ? (
              <VisibilityOffIcon
                style={{
                  cursor: "pointer",
                  marginRight: "33px",
                  color: "green",
                }}
                onClick={() => setType("text")}
              >
                {" "}
              </VisibilityOffIcon>
            ) : (
              <VisibilityIcon
                style={{
                  cursor: "pointer",
                  marginRight: "30px",
                  color: "green",
                }}
                onClick={() => setType("password")}
              ></VisibilityIcon>
            )}
          </>
        }
      </div>
    </div>
  );
};
export default Password;

// ReactDom.render( <Pass/> , document.getElementById("root"));
