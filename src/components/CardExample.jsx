import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function CardExample() {
  return (
    <Card style={{ maxWidth: 400, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is an example of a Material-UI Card component.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardExample;
