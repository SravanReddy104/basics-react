import { useState } from "react";
const Use = () => {
  const [Bgcolor, setBgcolor] = useState("green");
  return (
    <div>
      <p style={{ backgroundColor: `${Bgcolor}` }}>
        Click on the button to see the change in backgroundColor{" "}
      </p>{" "}
      <div>
        <button onClick={() => setBgcolor("red")}>
          {" "}
          change backgroundColor{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default Use;
