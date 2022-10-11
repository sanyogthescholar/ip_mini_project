import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function Addcourse() {
  const url = "/api/addcourse";
  const [data, setData] = useState({
    yojanaName: "",
    minAge: "",
    maxAge: "",
    imageUrl: "",
    ministry: ""
  });

  function submit(e) {
    e.preventDefault();
    axios({method: "POST", url:url, data:{
        yojanaName: data.yojanaName,
        minAge: data.minAge,
        maxAge: data.maxAge,
        imageUrl: data.imageUrl,
        ministry: data.ministry
    }});
    //var final_url = url + `?name=${data.name}&description=${data.description}&link=${data.link}&type_=${data.type_}`
    //console.log(final_url)
    //axios.get(final_url)
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              padding: "15px",
            }}
          >
            <TextField
              fullWidth
              label="Yojana Name"
              id="yojanaName"
              value={data.yojanaName}
              onChange={(e) => handle(e)}
            />{" "}
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              padding: "15px",
            }}
          >
            <TextField
              fullWidth
              label="Ministry Name"
              id="ministry"
              value={data.ministry}
              onChange={(e) => handle(e)}
            />{" "}
          </Box>
          {/* <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              padding: "15px",
            }}
          >
            <TextField
              fullWidth
              label="Description"
              id="description"
              value={data.description}
              onChange={(e) => handle(e)}
            />{" "}
          </Box>{" "} */}
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              padding: "15px",
            }}
          >
            <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
              fullWidth
              label="Min Age"
              id="minAge"
              type="num"
              value={data.minAge}
              onChange={(e) => handle(e)}
            />{" "}
          </Box>{" "}
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              padding: "15px",
            }}
          >
            <TextField
              fullWidth
              label="Max Age"
              id="maxAge"
              type="num"
              value={data.maxAge}
              onChange={(e) => handle(e)}
            />{" "}
          </Box>{" "}
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              padding: "15px",
            }}
          >
            <TextField
              fullWidth
              label="Image URL"
              id="imageUrl"
              type="link"
              value={data.imageUrl}
              onChange={(e) => handle(e)}
            />{" "}
          </Box>{" "}
          <div className="mb-3">
          </div>
          <button onClick={()=>{alert("Data submitted succesfully")}}> Add Yojana </button>{" "}
        </div>{" "}
      </form>{" "}
    </>
  );
}
