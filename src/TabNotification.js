import { useState,useRef,useEffect } from "react";


const orginalTitle = document.title;
const tick = (message)=>{
   document.title=document.title === message?orginalTitle:message;
}
function TabNotification(interval=1000) {
    const intervalref = useRef(null);
    const [message, setmessage] = useState(null);
    const clearIntervals = ()=>{
        clearInterval(intervalref.current);
        intervalref.current=null;
    }
    console.log("helo from tabs")
    const clearMessage=()=>{
        document.title=orginalTitle;
        setmessage(null);
    }

    useEffect(() => {
      (message&&!intervalref.current)?intervalref.current=setInterval(tick,interval,message):clearIntervals();
    
    }, [message])
    
    useEffect(()=>{clearInterval(intervalref.current)},[])
   
  return [setmessage,clearMessage]
    
  
}

export default TabNotification