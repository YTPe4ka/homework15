import React from "react";
import { Button } from "@mui/material";

function ButtonExample() {
  return (
    <div>
      <h2>Button Component</h2>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary" style={{ marginLeft: "10px" }}>
        Secondary Button
      </Button>
    </div>
  );
}

export default ButtonExample;
