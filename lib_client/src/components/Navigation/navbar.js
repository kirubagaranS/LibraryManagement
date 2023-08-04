import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import logos from "./logoimg.jpeg"

export function Navbars(){
    return(
        <>
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logos} alt="logo" width="30" height="24"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/mains" class="nav-link " aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/formss" class="nav-link" href="#">DeliverBook</Link>
        </li>
        <li class="nav-item">
          <Link to="/returnss" class="nav-link" href="#">ReturnBook</Link>
        </li>
        <li class="nav-item">
          <Link to="/regiss" class="nav-link" href="#">Signup student</Link>
        </li>
            <li><Link to="/update" class="nav-link" href="#">Add New Books</Link>
            </li>
           
      </ul>
      
    </div>
  </div>
</nav>
<div className="imgback vh-100 pt-1">
<div className="container-fluid col-lg-12 mt-4 row mx-auto">
    <div className="container text-center col-lg-2 bg-white border border-dark rounded-3">
        <h1>Total</h1>
        <h1> Books:</h1>
        <h2 className="mt-4" >100</h2>
       <Link to="/stockss"><h5 className="text-end mt-5">Book List</h5></Link>
    </div>
    <div className="container col-lg-2 bg-white rounded-3">
        <h1>Available</h1> 
        <h1>Books:</h1>
        <h2>120</h2>
    </div>
    <div className="col-lg-2 container bg-white rounded-3">
        <h1>Issued</h1>
        <h1> Books:</h1>
        <h2>120</h2>
    </div>
    <div className="col-lg-2 container bg-white rounded-3">
        <h1>Today Dashboard</h1>
        <div className="col-lg-12 row mx-auto">
            <div className="col-lg-6">
                <h4>Return</h4>
                <h4>Book</h4>
                <h4>30</h4>
            </div>
            <div className="col-lg-6">
                <h4>Issued</h4>
                <h4>Book</h4>
                <h4>20</h4>
            </div>
            <Link to="/detialss" ><p>View...</p></Link>
        </div>
    </div>
    </div>
    <div></div>
</div>

</div>
        </>
    );
}