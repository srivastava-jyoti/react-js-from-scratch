import React from "react";
import { useState } from "react";
import TextField from "./TextField";
const Login =()=>{
    const [userName, setuserName] = useState("");
    const onChange = (event)=>{
        setuserName(event.target.value);
    }
    return(
    <>
    <TextField onChange = {onChange}/>
    <button>Submt</button>
    </>
    )
}
export default Login;