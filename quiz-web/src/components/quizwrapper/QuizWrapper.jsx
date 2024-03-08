import React, { useEffect } from 'react';
import axios from 'axios';
import { Pagination } from "@mui/material";
import { Question } from "../question/Question";
import questions from "../../assets/questions";
export const QuizWrapper = ({quizid=111111}) => {
  // quizid = 111111;
  const [currentQuestionNumber, setQuestionNumber] = React.useState(1);
  const handleChange = (event, value) => {
    setQuestionNumber(value ,() => {
      console.log(currentQuestionNumber);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/quiz/questions?quizid=${quizid}`,{withCredentials: true});
        console.log(response.data);
      } catch (error) {
        console.error("There was an error fetching the data", error);
      }
    };

    fetchData();
  }); 
  return (
    <div>
      <Question />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Pagination
          count={questions.length}
          variant="outlined"
          shape="rounded"
          page={currentQuestionNumber}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
