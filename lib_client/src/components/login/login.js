import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faUserPen } from "@fortawesome/free-solid-svg-icons";

export function Loginpageslib(){
  localStorage.clear()
  const handlelogin=async(event)=>{
  event.preventDefault();
  var username=document.getElementById("phone").value
  var password=document.getElementById("password").value
  var key={
      "user_name":username,
      "password":password
  }
  await axios.post("http://localhost:3003/login",key)
  .then(function(res){
      if (res.data.status === "error"){
          alert('Invalid Credentials contact Admin')
          window.location.reload();
      }
      else if (res.data.status==='success')
      {
        window.location.href=`/hrsregisters`
      }
      else if(res.data.status==='Invalid_data'){
          alert("the given data is incorrect")
      }else if(res.data.status==='Invalid'){
          alert("phone and password incorect")
      }
  })
}
    return(
        <>
        <div className="logbag vh-100 text-center container-fluid pt-5">
            <div className="container mt-5 pt-5 bg-white rounded-5 pb-5 col-lg-6">
                <form onSubmit={handlelogin}> 
                <div><FontAwesomeIcon icon={faUserPen} className="mx-3 topclas" /></div>
                <div className="mt-2 bors col-lg-6 mx-auto rounded-4">
                <FontAwesomeIcon icon={faUser} className="mx-3"/> <input type="text" maxLength="" id="phone" placeholder="Username/phone no" className="usernam"/>
                </div>
                <div className="mt-3 bors col-lg-6 mx-auto rounded-4">
                <FontAwesomeIcon icon={faLock} className="mx-3"/><input type="password" id="password" placeholder="Enter password" className="usernam"/>
                </div>
                <div className="mt-4 ">
                <button type="submit" className="btn btn-info">Login</button>
                </div>
              </form>
            </div>
        </div>
        </>
    );
}