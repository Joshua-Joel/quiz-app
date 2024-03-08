import React from "react";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";

export const Question = () => {
  return (
    <div>
      <Paper
        style={{
          backgroundColor: "#80a4ed",
          display: "flex",
          alignItems: "center",
          width: "60%",
          margin: "20px auto",
          height: "78%",
          padding: "10px",
          borderRadius: "10px",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "25px",
          color: "white",
        }}
        elevation={3}
      >
        1)  Consider the following statements:

1. Set up by Government of India, Media Lab Asia is a non-profit organization.

2. Media Lab Asia largely emphasizes on the use of ICT for education, livelihood generation, healthcare, etc.

Choose the correct answer from the codes given below:
      </Paper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "40%",
          margin: "0 auto",
          height: "78%",
          padding: "10px",
        }}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="option 1" control={<Radio />} label="option 1" />
            <FormControlLabel value="option 2" control={<Radio />} label="option 2" />
            <FormControlLabel value="option 3" control={<Radio />} label="option 3" />
            <FormControlLabel value="option 4" control={<Radio />} label="option 4" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
