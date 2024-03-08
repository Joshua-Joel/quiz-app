import React from "react";
import ButtonAppBar from "../components/appbar/AppBar";
import ReportTable from "../components/reporttable/ReportTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const Report = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <ReportTable />
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button variant="solid" startIcon={<HomeOutlinedIcon />} style={{ backgroundColor:"green",color:"white" }} onClick={()=> {navigate('/')}}>
            Return home
        </Button>
      </div>
    </div>
  );
};
