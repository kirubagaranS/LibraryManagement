import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Stocklistes(){
    
    const[details,setdetails]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3003/allbook")
        .then(response=> response.json())
        .then(output=>setdetails(output))
  },[])
  function delet(Book_id){
    let key={service_id:Book_id}
    axios.post('http://localhost:3003/deletebook',key)
    .then(function(res){
        if(res.data.status ==="error"){
            alert("Data is not del")
        }
        else if(res.data.status === "success"){
            alert("Data is deleted")
        }
})
}
    return(
        <>
        <div className="probgcolback pt-3 row pb-5">
        {
                details.map((value,index)=>(
                        <>
                        <div class="card w-25 col-lg-3 mx-auto">
  <div class="card-header">
    BookId:{value.Book_id}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">BookName:{value.Book_Name}</li>
    <li class="list-group-item">AuthorName:{value.Author_Name}</li>
    <li class="list-group-item">Publication:{value.Publication}</li>
    <li class="list-group-item">Publication:{value.publication_year}</li>
  </ul>
  <Link to={`/updatess/${value.Book_id}`}><button type="button" class="btn btn-outline-primary">Update</button></Link>
  <button type="button"  class="col-lg-4 btn btn-danger" onClick={()=>{delet(value.Book_id)}}>Delete</button>
</div>
                        </>
                ))
            }
          
        </div>
        </>
    );
}