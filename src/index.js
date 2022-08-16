import ReactDom from "react-dom";

import Home from "./Home";

// import React from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomRoutes from "./CustomRoutes";

import ErrorBoundary from "./ErrorBoundary";
import Hello from "./Hello.js"


function ErrorFallback({error,resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
function App() {
  // const  handle = async ()=>{
  //   await createUserWithEmailAndPassword(auth,"sravani@gmail.com","sravan").then((response)=>{console.log(response)}).catch((err)=>alert(err))
  // }
  return (
    <div>
      <CustomRoutes />
      <Home />
<ErrorBoundary>
<Hello/>
</ErrorBoundary>
  
      
       
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
