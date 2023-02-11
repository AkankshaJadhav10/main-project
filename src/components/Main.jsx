import React from "react";
import Form from "./Links";
import web from "./images/web.png";
import Slider from "./Slider";
import Car1 from "./Car1";
import LastPart from "./LastPart";
const Main = () => {
  return (
    <>
      {/* ============First img and text============================================================= */}
      <div className="row" style={{ backgroundColor: "rgb(255, 167, 229)" }}>
        <div class="col  mt-5 ms-5">
          <h3>Over 4 crore customers have faith in us because we care.</h3>
        </div>
        <div class="col"></div>
        <div class="col">
          <img src={web} alt="" />
        </div>
      </div>
      {/* ===========second car bike etc========================================================================================== */}
      <div class=" overflow-hidden">
        <div class="row gx-5">
          <div class="col-8">
            <div class="p-3 border bg-light">
              <div
                className="w-100 "
                style={{ backgroundColor: "white", borderRadius: "10px" }}
              >
                <Form />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 border bg-light">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
              
                </div>
          </div>
        </div>
      </div>
<div>
 </div>
    </>
  );
};
export default Main;
