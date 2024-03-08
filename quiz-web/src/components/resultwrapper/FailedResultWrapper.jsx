import React from "react";
import success from "../../assets/failed.jpg";
export const FailedResultWrapper = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
      <img
        style={{
          width: "14%",
          height: "14%",
          borderRadius: "10px",
          loading:"once",
          margin: "40px 0", // Center the image horizontally and vertically
        }}
        src={success}
        alt="hello"
      />
      <h1
        style={{
        textAlign: "center" ,
        margin:"0"}}
      >
        Oops..! Better luck next time..!
      </h1>
    </div>
  );
};
