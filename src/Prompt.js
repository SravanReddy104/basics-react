import { useState } from "react";
import { Button } from "@material-ui/core";

const Prompt = () => {
  const [loggin, setloggin] = useState(null);
  const [name, setname] = useState("");

  const Auth = () => {
    if (loggin) {
      return (
        <>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setloggin(false)}
          >
            {" "}
            Logout{" "}
          </Button>
          <div>
            <p> {`heloo ${name}`}</p>
          </div>
        </>
      );
    } else {
      return (
        <Button variant="contained" color="secondary" onClick={login}>
          {" "}
          Loggin{" "}
        </Button>
      );
    }
  };
  const login = () => {
    var k = prompt("Enter your name");
    setname(k);
    setloggin(true);
  };

  return (
    <>
      <div>
        <Auth />
      </div>
    </>
  );
};
export default Prompt;
