import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const Bike = () => {
  return (
    <>
      <div class="row row-cols-auto mt-5 w-75 ms-5">
        <div class="col">
          {" "}
          Bike registration no
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-helperText"
              placeholder="MH45-dg3456"
              variant="standard"
            />
          </Box>
        </div>
        <div class="col">
          {" "}
          Mobile No.
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-helperText"
              placeholder="Enter Mobile No."
              variant="standard"
            />
          </Box>
        </div>
        <div class="col">
          {" "}
          Email
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-helperText"
              placeholder="Enter Email Address"
              variant="standard"
            />
          </Box>
        </div>
        <div class="col">
          {" "}
          <button className="mt-4 rounded-5 btn btn-warning">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Bike;
