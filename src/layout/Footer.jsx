import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <Typography variant="body2" color="gray">
        Copyright © SUMAN DAS {new Date().getFullYear()}. All rights reserved.
      </Typography>
      {/* Source code refers to the Github repository. Clicking on it takes the user to it on a new tab. */}
      <Link
        to="https://github.com/webdevsuman/matrix-calculator-webdevsuman"
        target="_blank"
      >
        <Typography variant="body2" color="ghostwhite">
          Source Code
        </Typography>
      </Link>
    </div>
  );
};

export default Footer;
