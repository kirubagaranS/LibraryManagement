import React from "react";
import axios from "axios";
export function Allbooksstock(){
  const handleinsert=async(event)=>{
    var user=document.getElementById("bname").value 
    var name=document.getElementById("author").value 
    var phones=document.getElementById("Publication").value
    var email=document.getElementById("year").value 
    var key={
      "userk":user,
      "name":name,
      "phone":phones,
      "email":email,
    }
    if(user==''){
      alert("please select user")
    }else if(name==''){
      alert("please fill name")
    }else if(phones==''){
      alert("please fill phone number")
    }else if(email==''){
      alert("please fill email")
    }else{
      await axios.post("http://localhost:3003/insertdata",key)
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
        <form onSubmit={handleinsert}>
          
          <div class="mb-3 col-lg-8 mx-auto">
             <label for="formGroupExampleInput" class="form-label">Book Name</label>
                <input type="text" class="form-control" id="bname" placeholder="Enter BookName"/>
              </div>
              <div class="mb-3 col-lg-8 mx-auto">
                <label for="formGroupExampleInput2" class="form-label">Author Name</label>
                <input type="text" class="form-control" id="author" placeholder="Enter AuthorName"/>
              </div>
              <div class="mb-3 col-lg-8 mx-auto">
                <label for="formGroupExampleInput2" class="form-label">Publication</label>
                <input type="text" class="form-control" id="Publication" placeholder="Enter Publication"/>
              </div>
              <div class="mb-3 col-lg-8 mx-auto">
                <label for="formGroupExampleInput2" class="form-label">Publish Year</label>
                <input type="text" class="form-control" id="year" placeholder="Enter Publish Year"/>
              </div>
              <div class="col-lg-8 mx-auto">
                  <button type="submit" class="btn btn-primary">ADD BOOK</button>
                </div>
</form>
        </>
    );
}