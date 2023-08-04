import React from "react";
import "./register.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faEnvelope, faLocationDot, faLock, faPhone, faUser, faUserCheck, faUserPen, faYen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export function Signuppage(){
  const handleinsert=async(event)=>{
    event.preventDefault()
    var user=document.getElementById("pass").value 
    var name=document.getElementById("names").value 
    var phones=document.getElementById("phones").value
    var email=document.getElementById("emails").value 
    var place=document.getElementById("area").value 
    var pass=document.getElementById("batch").value 
    var key={
      "userk":user,
      "name":name,
      "phone":phones,
      "email":email,
      "place":place,
      "pass":pass
    }
    if(user==''){
      alert("please select user")
    }else if(name==''){
      alert("please fill name")
    }else if(phones==''){
      alert("please fill phone number")
    }else if(email==''){
      alert("please fill email")
    }else if(place==''){
      alert("please fill location")
    }else if(pass==''){
      alert("please fill password")
    }else{
      await axios.post("http://localhost:3003/insertstudentdata",key)
      .then((res)=>{
        if(res.data.status==="error"){
          alert("data is not insert")
        }else if(res.data.status==="success"){
          alert("data is inserted")
          window.location.href=`/formss`
                  }

      })
    }
  }
    return(
        <>
        <div className="container-fluid pt-5 colorbackhr vh-100">
            <form onSubmit={handleinsert} className="container col-lg-7 mx-auto hrregbackcol pt-3 mt-5 rounded-5 pb-5">
              <div><FontAwesomeIcon icon={faUserPen} className="text-primary weightsoftop mx-auto col-lg-12"/></div>
              <div className="mt-4 registername  mx-auto col-lg-4  rounded-3">
          <FontAwesomeIcon icon={faUserCheck} className="me-2 ms-2"/>
            <input id="pass" placeholder="Student reg number" type="text" className="register-name"/>
          </div>
          <div className="mt-2 registername col-lg-4 mx-auto rounded-3 ">
          <FontAwesomeIcon icon={faUser} className="me-2 ms-2"/>
            <input id="names" placeholder="Enter your full name" type="text" className="register-name "/>
          </div>
          <div className="mt-2 registername  mx-auto col-lg-4 rounded-3">
          <FontAwesomeIcon icon={faPhone} className="me-2 ms-2"/>
            <input id="phones" placeholder="Enter phone number" type="number" className="register-name"/>
          </div>

          <div className="mt-2 registername  mx-auto col-lg-4 rounded-3">
          <FontAwesomeIcon icon={faEnvelope}className="me-2 ms-2" />
            <input id="emails" placeholder="Enter your email_id" type="email" className="register-name"/>
          </div>

          <div className="mt-2 registername  mx-auto col-lg-4 rounded-3" >
          <FontAwesomeIcon icon={faLocationDot} className="me-2 ms-2"/>
            <input id="area" placeholder="Enter Department" type="text" className="register-name"/>
          </div>
          <div className="mt-2 registername  mx-auto col-lg-4  rounded-3">
          <FontAwesomeIcon icon={faDatabase} className="me-2 ms-2"/>
            <input id="batch" placeholder="Enter batch" type="text" className="register-name"/>
          </div>
          <div className="col-lg-1 mx-auto mt-4">
          <button type="submit" className="btn btn-primary">Create</button>
          </div>
          </form>
          </div>
        </>
    );
}