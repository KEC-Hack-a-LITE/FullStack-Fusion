import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function MultiActionAreaCard(props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ Width: 345, zIndex: 1 }} className="w-[23%]">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          className="h-[300px]"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography gutterBottom variant="h5" component="div"></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="text-[#05685e]" onClick={() => navigate("/book")}>
          {props.linkText}
        </Button>
      </CardActions>
    </Card>
  );
}
