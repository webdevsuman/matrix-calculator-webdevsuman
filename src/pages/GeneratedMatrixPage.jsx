import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GeneratedMatrixPage = () => {
  //Number of rows and columns are accessed through useParams
  const { rows, cols } = useParams();
  //   console.log("Rows:", rows);
  //   console.log("Cols:", cols);

  const [matrices, setMatrices] = useState([]);

  const generateMatrixPair = (r, c) => {
    const sumMatrix = [];
    const mulMatrix = [];
    for (let i = 0; i < r; i++) {
      const sumRow = [];
      const mulRow = [];
      for (let j = 0; j < c; j++) {
        sumRow.push(i + j);
        mulRow.push(i * j);
      }
      sumMatrix.push(sumRow);
      mulMatrix.push(mulRow);
    }
    return { sumMatrix, mulMatrix };
  };

  const onGenerate = () => {
    if (rows <= 0 || cols <= 0) {
      setMatrices([]);
      return;
    }
    const newPair = generateMatrixPair(rows, cols);
    setMatrices([newPair]);
  };

  useEffect(() => {
    onGenerate();
  }, [rows, cols]);

  //This single function Generates the Matrix and it is re-used in every generation of Matrix Table
  const renderTable = (data, title) => (
    <TableContainer component={Paper} className="mb-4">
      <Box className="p-4">
        <Typography variant="h6" color="gray" className="font-medium">
          {title}
        </Typography>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            {data[0]?.map((_, idx) => (
              <TableCell key={idx} align="center">
                <b>
                  <ins>C:{idx}</ins>
                </b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rIdx) => (
            <TableRow key={rIdx}>
              {row.map((val, cIdx) => (
                <TableCell key={cIdx} align="center">
                  {val}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  //FOR ADDITION OF THE SUM-MATRIX AND MULTIPLICATION-MATRIX
  const [resultMatrix, setResultMatrix] = useState([]);

  const handleMatrixAddition = () => {
    if (!matrices.length) return;
    const { sumMatrix, mulMatrix } = matrices[0];

    const addedMatrix = sumMatrix.map((row, i) =>
      row.map((val, j) => val + mulMatrix[i][j])
    );

    setResultMatrix(addedMatrix);
  };

  return rows == "0" || cols == "0" ? (
    ///If the User enters 0 Rows OR 0 Columns then Show this.
    <div className="my-10 flex flex-col items-center gap-5">
      <Typography variant="h4">Matrix not be generated</Typography>
      <Typography variant="body1">
        Please enter valid number of rows or columns.
      </Typography>
      <Link to="/">
        {/*Go back to Homepage */}
        <Button variant="outlined">Go Back</Button>
      </Link>
    </div>
  ) : (
    ///If User put valid inputs, Show this.
    <div className="p-10 flex flex-col items-center uppercase gap-10 text-center">
      <Typography variant="h3" color="#6FE6FC">
        Generated Matrices
      </Typography>
      <div className="flex gap-5 capitalize">
        <Typography variant="body1" className="text-gray-500">
          <b>Number of Rows:</b> {rows}
        </Typography>
        <Typography variant="body1" className="text-gray-500">
          <b>Number of Columns:</b> {cols}
        </Typography>
        {/* GENERATED MATRICES */}
      </div>
      <div className="flex items-center justify-center gap-15">
        {matrices.map((pair, idx) => (
          <Paper key={idx} elevation={5} className=" p-5">
            <div>
              <div className="flex gap-10">
                {renderTable(
                  pair.sumMatrix,
                  `Summation Matrix (${pair.sumMatrix.length}×${
                    pair.sumMatrix[0]?.length || 0
                  })`
                )}
                {renderTable(
                  pair.mulMatrix,
                  `Multiplication Matrix (${pair.mulMatrix.length}×${
                    pair.mulMatrix[0]?.length || 0
                  })`
                )}
              </div>
            </div>
          </Paper>
        ))}

        {/* This is for the Addition of the Summation matrix and the Multiplication matrix */}
        <div className="flex flex-col gap-5 items-center">
          <Typography variant="body2" color="secondary">
            Addition of the above two matrices
          </Typography>
          <Button
            variant="outlined"
            color="success"
            onClick={handleMatrixAddition}
          >
            Add matrix
          </Button>
        </div>
        {/* Showing the Resultant Matrix after Final Addition */}
        {resultMatrix.length > 0 && (
          <Paper elevation={5} className="p-5">
            {renderTable(resultMatrix, "Resultant Matrix")}
          </Paper>
        )}
      </div>
      <Link to="/">
        {/*Go back to Homepage */}
        <Button variant="outlined" size="large">
          BACK
        </Button>
      </Link>
    </div>
  );
};

export default GeneratedMatrixPage;
