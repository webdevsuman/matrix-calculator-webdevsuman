import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  //For navigating to the Generated Matrix page
  const navigate = useNavigate();
  //For Handling the Rows and Columns inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Navigating to the Resultant page
  const submitHandler = (input) => {
    // console.log(input);

    navigate(`/matrix/${input.rows}/${input.cols}`);
  };
  return (
    <div className="p-10 flex flex-col items-center justify-center gap-5 h-[90vh]">
      <Typography variant="h3" className="!mb-5" color="aqua">
        Matrix Calculator
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submitHandler)}
        className="flex gap-5"
      >
        <TextField
          label="Row Number"
          type="number"
          {...register("rows", {
            required: "Rows should not be blank",
          })}
          error={!!errors.rows}
          helperText={errors.rows?.message}
        />
        <TextField
          label="Column Number"
          type="number"
          {...register("cols", {
            required: "Columns should not be blank",
          })}
          error={!!errors.cols}
          helperText={errors.cols?.message}
        />
        <Button type="submit" variant="outlined">
          Generate &nbsp;
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </div>
  );
};

export default Home;
