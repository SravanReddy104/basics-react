import React from 'react'
import TabsNotification from "./TabNotification";
function Hello() {
  const [setmessage,clearIntervals]=TabsNotification(1000);
  return (

    <div style={{display:"grid",placeItems:"center",gap:"20px",gridTemplateColumns:"auto"}}>
    <button onClick={()=>{setmessage(`************ New Message`);
    console.log("this",document.title)}}>Notify</button>
    <button onClick={()=>clearIntervals()}>Stop</button>
</div>
  )
}

export default Hello