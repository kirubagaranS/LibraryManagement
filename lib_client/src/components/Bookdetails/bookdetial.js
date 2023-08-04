import React from "react";
import "./bookdetial.css";

export function Bookdetialss(){
    return(
        <>
            <div className="container-fluid col-lg-12 pt-1 pb-1 row backcol  vh-100 mx-auto">
                <div className=" container mt-2 mb-2 col-lg-5 pt-1 rounded-3 bg-white">
                    <div className="col-lg-11 row mt-3 mx-auto backcol rounded-3">
                       <h1 className="col-lg-9">ISSUED BOOKS</h1>
                       <button className="btn btn-primary col-lg-2"> login</button>
                    </div>
                    <div>
                        <p>User ID:</p>
                        <p>Book ID:</p>
                        <p>BookName:</p> 
                        <p>IssueDate:</p>
                        <p>ReturningDate:</p>                  
                    </div>
                    <div className="row">
                        <h3 className="col-lg-5">TotalUsers:</h3>
                        <h3 className="col-lg-5">TotalBooks:</h3>
                    </div>
                    
                </div>
                <div className=" container mt-2 mb-2 pt-1 col-lg-5 rounded-3 bg-white">
                    <div className="col-lg-11 mt-3 mx-auto backcol rounded-3">
                       <h1 className="col-lg-11 ps-5">RETURNED BOOKS</h1>
                    </div>
                    <div>
                        <p>User ID:</p>
                        <p>Book ID:</p>
                        <p>BookName:</p> 
                        <p>IssuedDate:</p>
                        <p>ReturningDate:</p>
                        <p>FineAmount:</p>
                    </div>
                    <div className="row">
                        <h3 className="col-lg-5">TotalBooks:</h3>
                        <h3 className="col-lg-5">TotalFineAmount:</h3>
                    </div>
                   
                </div>
            </div>

        </>
    );
}