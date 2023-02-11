import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Form=()=>{
return(
  <>
  <div className="container">
 <ul class="nav nav-pills nav-fill gap-2 p-1 small   shadow-sm" id="pillNav2" role="tablist" >
  <li class="nav-item" role="presentation"><i class="bi bi-car-front-fill icon"></i>
  <Link to="/car">
    <button class="nav-link btn-primary" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true"> 
    cars
    </button></Link>
  </li>
  <li class="nav-item" role="presentation"><i class="bi bi-bicycle"></i>
  <Link to={"/bike"}>
    <button class="nav-link " id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Bikes</button></Link>
  </li>
  <li class="nav-item" role="presentation"><i class="bi bi-bag-heart"></i>
<Link to={"/health"}>
    <button class="nav-link " id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Health</button></Link>
  </li>
  <li class="nav-item" role="presentation"><i class="bi bi-airplane"></i>
  <Link to={"/travel"}>
    <button class="nav-link" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Travel</button></Link>
  </li>
  <li class="nav-item" role="presentation"><i class="bi bi-person-fill-slash"></i>
  <Link to={"/cyber"}>
    <button class="nav-link" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Cyber</button></Link>
  </li>
  <li class="nav-item" role="presentation"><i class="bi bi-file-earmark-post"></i>
  <Link to={"/renewal"}>
    <button class="nav-link " id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Renewal</button></Link>
  </li>
</ul>
</div>
  </>
)
}

export default Form