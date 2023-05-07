import React from "react";

const TextField = ({onChange})=>{
return(
<div>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" onChange ={(event)=>onChange(event)} required></input>
    <label for="uname"><b>Password</b></label>
    <input type="text" placeholder="Enter Password" name="password" required></input>
</div>)
}
export default TextField;