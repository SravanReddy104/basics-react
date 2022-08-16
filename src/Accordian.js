import React from "react";
import { Collapse, IconButton } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import "./Accordian.css";
const Accordian = () => {
  const handle = () => {
    setExpanded(!Expanded);
  };
  const [Expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="app">
        <div className="text">
          <p>Accordian</p>
        </div>
        <IconButton onClick={handle} aria-expanded={Expanded} aria-label="More">
          {Expanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </div>
      <div>
        <Collapse in={Expanded} timeout={400} unmountOnExit>
          <p>Accordian MAtter</p>
          <p>
            Copyright (C) Microsoft Corporation. All rights reserved. Try the
            new cross-platform PowerShell https://aka.ms/pscore6 PS
            D:\react\templ Session contents restored from 6/14/2022 at 9:32:02
            PM Windows PowerShell Copyright (C) Microsoft Corporation. All
            rights reserved. Try the new cross-platform PowerShell
            https://aka.ms/pscore6 PS D:\react\templ
          </p>
        </Collapse>
      </div>
    </>
  );
};

export default Accordian;
