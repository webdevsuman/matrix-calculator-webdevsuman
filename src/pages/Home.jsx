import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (input) => {
    // console.log(input);
    navigate(`/matrix/${input.rows}/${input.cols}`);
  };
  return (
    <div className="p-10 flex flex-col items-center justify-center gap-5 h-[100vh]">
      <Typography variant="h3" className="!mb-5" color="aqua">
        Matrix Calculator
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submitHandler)}
        className="flex gap-5"
      >
        <TextField label="Row Number" {...register("rows")} />
        <TextField label="Column Number" {...register("cols")} />
        <Button type="submit" variant="outlined">
          Generate
        </Button>
      </Box>
    </div>
  );
};

export default Home;
