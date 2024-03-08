import React, { useState } from "react";
import success from "../../assets/success.gif";
import { Button } from "@mui/material";

export const ShareIdWrapper = ({quizId}) => {
  quizId = "123456";
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    copyToClipboard();
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    },2000)
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(quizId)
      .then(() => {
        console.log('Copied to clipboard successfully!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            width: "14%",
            height: "14%",
            borderRadius: "10px",
            loading: "once",
            margin: "5px 0", // Center the image horizontally and vertically
          }}
          src={success}
          alt="hello"
        />
        <h1
          style={{
            textAlign: "center",
            margin: "0",
          }}
        >
          Quizz created succesfully..!
        </h1>
        <h3>Your Quizz ID: 836192</h3>
        {!copied? <Button
          variant="solid"
          endIcon={<></>}
          style={{ margin: "0 10px", backgroundColor: "green", color: "white" }}
          onClick={handleClick}
        >
          Copy
        </Button>:<Button
          variant="solid"
          endIcon={<></>}
          style={{ margin: "0 10px", backgroundColor: "green", color: "white" }}
          onClick={handleClick}
        >
          copied
        </Button>}
      </div>
    </div>
  );
};
