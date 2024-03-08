import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import QuizModalDialog from "../modeldialog/QuizModalDialog";

export const HomeWrapper = () => {
const navigate = useNavigate(); 
  return (
    <div style={{background: "linear-gradient(180deg ,  white,lightskyblue ,lightsteelblue)",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <h1
        style={{
        textAlign: "center" ,
        margin:"0"}}
      >
        Test Your Knowledge: <br />Dive into Our Interactive Quiz Adventure!
      </h1>
      <p style={{fontSize:"25px",fontWeight:"400"}}>Easily run skills and knowledge quizzes</p>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px"}}>
        <Button variant="solid" startDecorator={<Add />} style={{ margin: "20px 10px",backgroundColor:"green" }} onClick={()=> {navigate('/')}}>
            Create new online quiz
        </Button>
        <QuizModalDialog/>
      </div>
    </div>
  );
};
