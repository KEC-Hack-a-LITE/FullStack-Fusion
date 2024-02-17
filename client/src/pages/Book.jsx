import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import MultiActionAreaCard from "../components/Card";
import ent from "../assets/images/ENT.png";
import ortho from "../assets/images/ortho.png";
import neuro from "../assets/images/neuro.png";
import cardiology from "../assets/images/heart.png";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
const steps = [
  "Select Department",
  "Select Doctor",
  "Select Time Slot",
  "Confirm Booking ",
];

export default function HorizontalLinearStepper() {
  const navigate = useNavigate();
  return (
    <div className="largeContainer">
      <div className="departments">
        <MultiActionAreaCard2 name="ENT" image={ent} goTo="entdocs" />
        <MultiActionAreaCard2 name="Ortho" image={ortho} goTo="orthodocs" />
        <MultiActionAreaCard2 name="Neuro" image={neuro} goTo="neurodocs" />
        <MultiActionAreaCard2
          name="Cardiology"
          image={cardiology}
          goTo="cardiodocs"
        />
      </div>
    </div>
  );
}
function MultiActionAreaCard2(props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ Width: 345, zIndex: 1 }} className="w-[23%]">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
          className="h-[300px]"
          onClick={() => navigate(`/${props.goTo}`)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
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
