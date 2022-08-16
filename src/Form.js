// import ReactDom from "react-dom";

// import {Button,CircularProgress} from "@material-ui/core";
import { useState } from "react";

import {Button,InputAdornment,TextField} from "@material-ui/core";
// import  VisibilityOffIcon  from "@material-ui/icons/VisibilityOff";
// import  VisibilityIcon  from "@material-ui/icons/Visibility";
import {Visibility,VisibilityOff} from "@material-ui/icons";



const Form =()=>{
    const tick=(e)=>{
        setEmail("");
        setPassword("");
        setUsername("");
        setShow(true);
        e.preventDefault();
    }
    
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [show,setShow] = useState(false);
    const [type,setType] = useState("./password.js")
    return(
        
        <div>
        <form>
        <div className="form">
               <h3 style={{justify:"center"}}>Form details</h3>
               <span style={{marginTop:"10px"}}></span>
               
                
               <TextField style={{margin:"13px"}} variant= "outlined" label="username" value={username} type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}></TextField>
               <TextField style={{margin:"13px"}} variant= "outlined" label="Email" type="email" value= {email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}></TextField>
               <TextField style={{margin:"13px"}}
                variant= "outlined" label="Password" type={type} 
               value= {password} placeholder="Password" 
               onChange={(e)=>setPassword(e.target.value)} InputProps={{endAdornment:(
                <InputAdornment position="start">
                    {type==="password"?(<VisibilityOff style={{cursor:"pointer",color:"blue"}} onClick={()=>setType("text")}></VisibilityOff>):(<Visibility style={{cursor:"pointer",}} onClick={()=>setType("password")}></Visibility>)}
                </InputAdornment>
               )}}>
               
                
               </TextField>
            
               <div>
               <Button style={{cursor:"pointer",marginTop:"23px", width:"40vw"}} variant="contained"
                color="primary" type="submit" onClick={(e)=>tick(e)} >Submit</Button>
               </div>
               </div>
        </form>
            
               {
               show&&
            
               `username - ${username} email -${email}`
               }
          

        </div>

    );

}
export default Form;




// ReactDom.render( <Form/> , document.getElementById("root"));