import React from "react";

const LastPart = () => {
  return (
    <>
      <div class="row row-cols-auto ms-5">
        <div class="col">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              I agree to the terms & conditions
            </label>
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              I want to get my quote and policy details on
            </label>
          </div>
        </div>
      </div>

      <div className="w-50 ms-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5">
          <div class="col ">
            <h3>2.17 Crore</h3>
            <p>Policies issued</p>
          </div>
          <div class="col">
            <h3>2.17 Crore</h3>
            <p>Policies issued</p>
          </div>
          <div class="col">
            <h3>2.17 Crore</h3>
            <p>Policies issued</p>
          </div>
          <div class="col">
            <h3>2.17 Crore</h3>
            <p>Policies issued</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPart;
