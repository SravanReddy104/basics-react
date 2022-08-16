import { useState } from "react";
import { Button } from "@material-ui/core";
const UseObj = () => {
  const [set, setback] = useState({
    name: "Sravan Reddy",
    last: "Myakala",
  });
  const an = () => {
    var k = prompt("enter the lastname");
    setback((pre) => ({ ...pre, last: k }));
  };
  return (
    <>
      <p> {`Hi ${set.name} ${set.last}`} </p>{" "}
      <div>
        <Button variant="contained" color="primary" onClick={an}>
          {" "}
          change{" "}
        </Button>{" "}
      </div>{" "}
    </>
  );
};
export default UseObj;
