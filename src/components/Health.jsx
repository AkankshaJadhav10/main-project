import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const Health = () => {
  return (
    <>
      <div class="row row-cols-auto mt-5 w-75 ms-5">
        <div class="col">
          {" "}
          Select Product
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
              placeholder="Health AdvantEdge"
              variant="standard"
            />
          </Box>
        </div>
        <div class="col">
          {" "}
          Insure Member
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
              placeholder="Add member"
              variant="standard"
            />
          </Box>
        </div>
        <div class="col">
          {" "}
          Contact Details
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
              placeholder="Add Details"
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

export default Health;
