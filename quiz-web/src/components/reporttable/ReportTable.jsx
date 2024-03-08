import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1976d2",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(qno, question, correct, selected) {
  return { qno, question, correct, selected};
}

const rows = [
  createData(1, "who is the father of our nation?", "A", "A"),
  createData(2, "who is the father of our nation?", "A", "A"),
  createData(3, "who is the father of our nation?", "A", "B"),
  createData(4, "who is the father of our nation?", "A", "A"),
  createData(5, "who is the father of our nation?", "A", "A"),
];

export default function ReportTable() {
  return (
    <div style={{display:"flex",flexDirection:"column",margin:"3% 0",alignItems:"center",justifyContent:"center"}}><TableContainer component={Paper} style={{width:"55%"}}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell >Qn no</StyledTableCell>
          <StyledTableCell align="center">Question</StyledTableCell>
          <StyledTableCell align="right">Your option</StyledTableCell>
          <StyledTableCell align="right">Correct option</StyledTableCell>
          <StyledTableCell align="right">Result</StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell >{row.qno}</StyledTableCell>
            <StyledTableCell align="center">{row.question}</StyledTableCell>
            <StyledTableCell align="right">{row.correct}</StyledTableCell>
            <StyledTableCell align="right">{row.selected}</StyledTableCell>
            <StyledTableCell align="right">{row.correct===row.selected?<CheckCircleOutlineIcon style={{color:"green"}}/>:<CancelOutlinedIcon style={{color:"red"}}/>}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
    
  );
}