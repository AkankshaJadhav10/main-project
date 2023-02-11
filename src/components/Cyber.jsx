import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const Cyber = () => {
  return (
    <>
      <div class="row row-cols-auto mt-5 w-75 ms-5">
        <div class="col">
          {" "}
          City Of Residence
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
              placeholder="pick one"
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
          <div className="mt-3">
            <Link to="#">Recent Quotes</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cyber;
