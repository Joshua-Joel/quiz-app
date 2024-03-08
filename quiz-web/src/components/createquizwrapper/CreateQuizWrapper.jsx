import React, { useState } from "react";
import { Button, Pagination } from "@mui/material";
import questions from "../../assets/questions";
import { NewQuestion } from "../newquestion/NewQuestion";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useNavigate } from 'react-router-dom';
const initialQuestionCount = 5;
export const CreateQuizWrapper = () => {
  const navigate = useNavigate();
  const [currentQuestionNumber, setQuestionNumber] = useState(1);
  const [quizData, setQuizData] = useState({
    questions: Array(initialQuestionCount).fill(undefined).map(() => ({
      questionName: "",
      options: [],
      answer: "",
    })),
  });
  const handleChange = (event, value) => {
    setQuestionNumber(value);
    console.log(currentQuestionNumber);
  };
  const setData = (question)=>{
    // console.log("data "+ JSON.stringify(question));
    setQuizData((prevQuizData) => {
      const updatedQuestions = [...prevQuizData.questions];
      updatedQuestions[currentQuestionNumber-1] = question;
      return { ...prevQuizData, questions: updatedQuestions };
    });
    console.log("Quizdata"+JSON.stringify(quizData));
    
  }
  return (
    <div>
      <NewQuestion questionNumber={currentQuestionNumber} values={quizData.questions[currentQuestionNumber]} sendToParent={setData}/>
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
        <Button variant="solid" endIcon={<DoneOutlinedIcon/>} style={{ margin: "0 10px",backgroundColor:"green",color:"white" }} onClick={()=> {navigate('/share-quiz')}}>
            Create
        </Button>
      </div>
    </div>
  );
};
