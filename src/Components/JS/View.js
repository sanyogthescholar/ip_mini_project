import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BiMapPin } from "react-icons/bi";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
const View=()=> {
  const params = useParams();
  const name = params.name;
  // const url = "http://localhost:4000/courses"

  // const [data, setData] = useState("");
  // useEffect(() => {
  //   const doFetch = async () => { const res = await fetch(url) 
  //     setData(res.json().data) };
  //   doFetch();
  // }, []);

 /*  useEffect(() => {
    fetchData();
  },[])
 */
const [data, setData] = useState("");
const getData = async () => {
    const fetchs = await fetch("api/courses", {
      method: "GET" // default, so we can ignore
    });
    axios.get("/api/courses")
    const all_courses = await fetchs.json();
    console.log(all_courses);
    setData(all_courses);
    console.log(data);
  };

  useEffect(() => {
   getData()
  },[]);

  return (
    <div>
       <h3
              style={{
                textAlign: "center",
                color: "brown",
                marginTop: "5px",
                fontWeight: "500",
              }}
            >
          {name}
            </h3>
      {/* {
      data.map((item) => {
        return ( */}
          <>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              <Card sx={{ maxWidth: "100%", marginTop: "20px" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      flexWrap: "wrap",
                    }}
                  >
                
                  Monish
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    
                    Bhivandi <BiMapPin />
                  </Typography>
                  <Typography gutterBottom variant="p" color="text.secondary">
                    
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"> 4.5 / 5 </Button>
                  {/* <Link to="/ProfileService"> */}
                    
                    <Button size="small"> Profile </Button>
                  {/* </Link> */}
                  <Stack
                    direction="row"
                    spacing={2}
                    style={{ marginLeft: "10px" }}
                  >
                    <Button variant="outlined" color="error">
                      Alert
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              <Card sx={{ maxWidth: "100%", marginTop: "20px" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      flexWrap: "wrap",
                    }}
                  >
                
                  Nisha
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    
                    Kalyan <BiMapPin />
                  </Typography>
                  <Typography gutterBottom variant="p" color="text.secondary">
                    
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"> 4.5 / 5 </Button>
                  {/* <Link to="/ProfileService"> */}
                    
                    <Button size="small"> Profile </Button>
                  {/* </Link> */}
                  <Stack
                    direction="row"
                    spacing={2}
                    style={{ marginLeft: "10px" }}
                  >
                    <Button variant="outlined" color="error">
                      Alert
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              <Card sx={{ maxWidth: "100%", marginTop: "20px" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      flexWrap: "wrap",
                    }}
                  >
                
                  Arti
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    
                    Dadar <BiMapPin />
                  </Typography>
                  <Typography gutterBottom variant="p" color="text.secondary">
                    
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"> 4.5 / 5 </Button>
                  {/* <Link to="/ProfileService"> */}
                    
                    <Button size="small"> Profile </Button>
                  {/* </Link> */}
                  <Stack
                    direction="row"
                    spacing={2}
                    style={{ marginLeft: "10px" }}
                  >
                    <Button variant="outlined" color="error">
                      Alert
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </div>
          </>
        {/* );
      })} */}
    </div>
  );
}

export default View