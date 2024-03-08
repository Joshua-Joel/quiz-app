import React from "react";
import Button from "@mui/joy/Button";
import { useNavigate } from 'react-router-dom';
import SubmitModalDialog from "../submitdialog/SubmitModalDialog";

export const QuizActionBar = () => {
    const navigate = useNavigate(); 
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
    <Button
        variant="solid"
        style={{ margin: "20px 10px", backgroundColor: "green" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Reset
      </Button>
      <SubmitModalDialog/>
      
    </div>
  );
};
