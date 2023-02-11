import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const Travel = () => {
  return (
    <>
      <div class="row row-cols-auto mt-5 w-75 ms-5">
        <div class="col">
          {" "}
          your Travel scope
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
              placeholder="select scope"
              variant="standard"
            />
          </Box>
        </div>
        <div class="col">
          {" "}
          trip start date
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
              placeholder="leaving on"
              variant="standard"
            />
          </Box>
        </div>
        <div class="col">
          {" "}
          trip end date
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
              placeholder="Returning date"
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

export default Travel;
