// import ReactDom from "react-dom";

import {Button,CircularProgress} from "@material-ui/core";
import { useState } from "react";


// import {Button} from "@material-ui/core";
// import  VisibilityOffIcon  from "@material-ui/icons/VisibilityOff";
// import  VisibilityIcon  from "@material-ui/icons/Visibility";
// import HttpsIcon from "@material-ui/icons/Https"

// import Use from "./Use";
// import Templ from "./Templ";

const FollowButton = ()=>{
    const [loading,setLoading] = useState(false);
    return(
        <div className="app">
        <h2>Click Follow button to see the loading</h2>
        {
            <>
                <Button style={{cursor:"pointer"}} variant = "contained" color = "primary" disabled={loading} onClick={()=>setLoading(true)}>
                {loading&&<CircularProgress thickness = {6} size="23px" color="primary" ></CircularProgress>}
                <span style={{marginRight:"7px"}}></span>
                {loading?"Folowing":"Folow"}
                </Button>
                <Button style={{cursor:"pointer",marginLeft:"23px"}} variant="contained" color="secondary" onClick={()=>setLoading(false)} >
                Cancel
                </Button>
            </>
        }
        </div>

    )
}
export default FollowButton;



// ReactDom.render( <FollowButton/> , document.getElementById("root"));