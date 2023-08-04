import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export function Updatebooksdata(){
    var{Book_id}=useParams()
    const [Book_Name,setBook_Name]= useState("")
  const [Author_Name,setAuthor_Name] = useState("")
  const [Publication,setPublication] = useState("")
  const [publication_year,setPublication_year]=useState("")
  
  useEffect(()=>{
      fetch("http://localhost:3003/getdataupadte/"+Book_id)
      .then(response=> response.json())
      .then((res)=>{
        setBook_Name(res[0].Book_Name)
        setAuthor_Name(res[0].Author_Name)
        setPublication(res[0].Publication)
        setPublication_year(res[0].publication_year)
      })
    },[])
    const handleupdateserv=(event)=>{
      event.preventDefault()
      var key={
        "experenice":Book_Name,
        "charge":Author_Name,
        "aboutven":Publication,
        "worklink":publication_year
      }
          axios.put("http://localhost:3003/updatedataserv/"+Book_id,key)
          .then(function (res){
              if(res.data.status==="error"){
                  alert('Error not upadte')
              }
              else if(res.data.status === "success"){
                  alert("the value are updated")
                  window.location.href=`/stockss`;
              }
      })
      }
    return(
        <>
        <form onSubmit={handleupdateserv}>
          
          <div class="mb-3 col-lg-8 mx-auto">
             <label for="formGroupExampleInput" class="form-label">Book Name</label>
                <input type="text" class="form-control" id="bname" placeholder="Enter BookName" value={Book_Name}  onChange={(a)=>{setBook_Name(a.target.value)}}/>
              </div>
              <div class="mb-3 col-lg-8 mx-auto">
                <label for="formGroupExampleInput2" class="form-label">Author Name</label>
                <input type="text" class="form-control" id="author" placeholder="Enter AuthorName" value={Author_Name}  onChange={(a)=>{setAuthor_Name(a.target.value)}}/>
              </div>
              <div class="mb-3 col-lg-8 mx-auto">
                <label for="formGroupExampleInput2" class="form-label">Publication</label>
                <input type="text" class="form-control" id="Publication" placeholder="Enter Publication" value={Publication}  onChange={(a)=>{setPublication(a.target.value)}}/>
              </div>
              <div class="mb-3 col-lg-8 mx-auto">
                <label for="formGroupExampleInput2" class="form-label">Publish Year</label>
                <input type="text" class="form-control" id="year" placeholder="Enter Publish Year" value={publication_year}  onChange={(a)=>{setPublication_year(a.target.value)}}/>
              </div>
              <div class="col-lg-8 mx-auto">
                  <button type="submit" class="btn btn-primary">update</button>
                </div>
</form>
        </>
    );
}