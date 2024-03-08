import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";

export const NewQuestion = ({ questionNumber, sendToParent, values }) => {
  const [question, setQuestion] = useState({
    questionName: "",
    options: Array(4)
      .fill(undefined)
      .map(() => {
        return "";
      }),
    answer: "",
  });
  const handleQuestionChange = (event) => {
    setQuestion({ ...question, questionName: event.target.value });
    sendToParent(question);
  };
  const handleAnswerChange = (event) => {
    setQuestion({ ...question, answer: event.target.value });
    sendToParent(question);
  };
  const handleOptionChange = (event) => {
    if (question) {
      const updatedOptions = question.options;
      updatedOptions[event.target.name] = event.target.value;
      console.log(
        "child log:" + JSON.stringify({ ...question, options: updatedOptions })
      );
      sendToParent({ ...question, options: updatedOptions });
    }
  };
  useEffect(() => {
    setQuestion(values);
  }, [values]);
  return (
    <div>
      <TextField
        style={{
          display: "flex",
          margin: "15px auto",
          padding: "10px 0 0 0",
          borderRadius: "10px",
          width: "60%",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "25px",
          color: "white",
        }}
        id="question-text-field"
        label={"Enter Question " + questionNumber}
        name="questionName"
        multiline
        rows={4}
        onChange={handleQuestionChange}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          left: "-10%",
          margin: "0 auto",
          height: "78%",
          flexDirection: "column",
        }}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <span
              style={{ padding: "5px", display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                value="A"
                control={<Radio />}
                onChange={handleAnswerChange}
              />
              <TextField
                id="text-field-1"
                label="Option 1"
                maxRows={4}
                multiline
                style={{ width: "80%", flex: 1 }}
                onChange={handleOptionChange}
                name="0"
              />
            </span>
            <span
              style={{ padding: "5px", display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                value="B"
                control={<Radio />}
                onChange={handleAnswerChange}
              />
              <TextField
                id="text-field-2"
                label="Option 2"
                maxRows={4}
                multiline
                style={{ width: "80%", flex: 1 }}
                onChange={handleOptionChange}
                name="1"
              />
            </span>
            <span
              style={{ padding: "5px", display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                value="C"
                control={<Radio />}
                onChange={handleAnswerChange}
              />
              <TextField
                id="text-field-3"
                label="Option 3"
                maxRows={4}
                multiline
                style={{ width: "80%", flex: 1 }}
                onChange={handleOptionChange}
                name="2"
              />
            </span>
            <span
              style={{ padding: "5px", display: "flex", alignItems: "center" }}
            >
              <FormControlLabel
                value="D"
                control={<Radio />}
                onChange={handleAnswerChange}
              />
              <TextField
                id="text-field-4"
                label="Option 4"
                maxRows={4}
                multiline
                style={{ width: "150%", flex: 1 }}
                onChange={handleOptionChange}
                name="3"
              />
            </span>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
