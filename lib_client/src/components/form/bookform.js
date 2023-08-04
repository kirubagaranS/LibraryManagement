import React, { useEffect, useState } from "react";
import "./bookform.css"
import axios from "axios";

export function Formbook(){
  const handleinsert=async(event)=>{
    var user=document.getElementById("user").value 
    var name=document.getElementById("books").value 
    var phones=document.getElementById("names").value
    var email=document.getElementById("dates").value 
    var date=document.getElementById("rdates").value
    var key={
      "userk":user,
      "name":name,
      "phone":phones,
      "email":email,
      "date":date
     
    }
    if(user==''){
      alert("please fill reg no")
    }else if(name==''){
      alert("please fill book id")
    }else if(phones==''){
      alert("please fill book name")
    }else if(email==''){
      alert("please fill issue date")
    }else{
      await axios.post("http://localhost:3003/insertdatadaily",key)
      .then((res)=>{
        if(res.data.status==="error"){
          alert("data is not insert")
        }else if(res.data.status==="success"){
          alert("data is inserted")
                  }

      })
    }
  }
    return(
        <>
            <div className="container-fluid col-lg-12 pt-1 pb-1 row backcol  vh-100 mx-auto">
                <form onSubmit={handleinsert} className=" container mt-2 mb-2 col-lg-5 pt-1 rounded-3 bg-white">
                    <div className="col-lg-11 row mt-3 mx-auto backcol rounded-3">
                       <h1 className="col-lg-12 text-center">BOOK DELIVER FORM</h1>
                    </div>
                    <div>
                        <p>Roll No:</p>
                        <input type="text" class="form-control" id="user" placeholder="Enter here"/>
                        <p>Book ID:</p>
                        <input type="text" class="form-control" id="books" placeholder="Enter here"/>
                        <p>BookName:</p>
                        <input type="text" class="form-control" id="names" placeholder="Enter here" /> 
                        <p>IssueDate:</p>
                        <input type="date" class="form-control" id="dates" placeholder="Enter here"/>
                        <p>RenewalDate:</p> 
                        <input type="date" class="form-control" id="rdates" placeholder="Enter here"/> 
                        <div class="col-12 mt-5">
                          <button type="submit" class="btn btn-primary">Update</button>
                           </div>
                    </div>
                    
                </form>

            </div>

        </>
    );
}