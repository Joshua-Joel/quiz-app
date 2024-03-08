import React, { useEffect, useState } from "react";
import ButtonAppBar from "../components/appbar/AppBar";
import { SuccessResultWrapper } from "../components/resultwrapper/SuccessResultWrapper";
import { FailedResultWrapper } from "../components/resultwrapper/FailedResultWrapper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Result = () => {
  const [isSuccess, setSuccess] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        const baseurl = "http://localhost:3000/api/quiz/results?quiz_id=111111";
        console.log("fetch call");
        const response = await fetch(baseurl, { // Added await here
          method: "GET",
          redirect: "follow",
          credentials: "include",
          headers: headers,
        });
        if (!response.ok) throw new Error('Network response was not ok.');
        const res = await response.json();
        console.log(res);
        setSuccess(true);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    fetchData();
    
  },[]);
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      {isSuccess ? <SuccessResultWrapper /> : <FailedResultWrapper />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: "0.7em",
        }}
      >
        <p>No of questions answered: 10</p>
        <p>No of questions correct: 10</p>
        <p>No of correct questions for pass: 10</p>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/report");
          }}
        >
          View detailed report
        </Button>
      </div>
    </div>
  );
};
