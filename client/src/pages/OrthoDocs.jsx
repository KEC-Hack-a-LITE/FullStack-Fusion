import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import doc1 from "../assets/images/doc1.png";
import { useNavigate } from "react-router-dom";

const OrthoDocs = () => {
  const [todoList, setTodoList] = useState([]);
  const [availTime, setavailTime] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const userName = localStorage.getItem("firstName");

  useEffect(() => {
    const getDoc = async () => {
      let data = JSON.stringify({
        department: "ortho",
      });
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/api/getDoctor",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      try {
        setIsLoading(true);
        const response = await axios.request(config).then((response) => {
          setTodoList(response?.data);
          //   setavailTime(response?.availabletime);
        });
        console.log(todoList);
        // console.log(availTime);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error?.response?.data?.message);
      }
    };
    getDoc();
  }, []);
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <div className="doctor-list">
      {/* <Typography variant="h4">Welcome {userName}.</Typography> */}
      {todoList.map((doc, index) => {
        return (
          <>
            <div className="flex">
              <MultiActionAreaCard22
                name={doc?.name}
                nmc={doc?.nmc}
                department={doc?.department}
                image={doc1}
                // availTime={doc.availabletime[index]}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};
function MultiActionAreaCard22(props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ Width: 345, zIndex: 1 }} className="w-[110%]">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="600px"
          image={props.image}
          className="h-[300px]"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <Typography component="div" style={{ textTransform: "uppercase" }}>
            {props.department}
          </Typography>
          <Typography component="div">NMC:{props.nmc}</Typography>
          {/* <Typography component="div">NMC:{availTime}</Typography> */}
          <div className="time_buttons">
            <Button
              style={{
                color: "white",
                backgroundColor: "#05685e",
                fontSize: "10px",
              }}
            >
              {" "}
              12:00 PM - 1:00 PM
            </Button>
            <Button
              style={{
                color: "white",
                backgroundColor: "#05685e",
                fontSize: "10px",
                padding: "10px",
              }}
            >
              {" "}
              1:00 PM - 2:00 PM
            </Button>
            <Button
              style={{
                color: "white",
                backgroundColor: "#05685e",
                fontSize: "10px",
              }}
            >
              {" "}
              2:00 PM - 3:00 PM
            </Button>
          </div>
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

export default OrthoDocs;
