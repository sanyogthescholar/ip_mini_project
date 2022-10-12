import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function Addcourse() {
  const url = "/api/addcourse";
  const [data, setData] = useState({
    courseName: "",
    minAge: "",
    maxAge: "",
    imageUrl: "",
    ministry: "",
  });

  function submit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: url,
      data: {
        courseName: data.courseName,
        provider: data.provider,
        imageUrl: data.imageUrl,
        description: data.description,
      },
    });
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
              label="Course Name"
              id="courseName"
              value={data.courseName}
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
              label="Course Provider Name"
              id="provider"
              value={data.provider}
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
              label="Description"
              id="description"
              value={data.description}
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
          <select
            id="type_"
            name="type_"
            style={{
              padding: "15px",
              border: "0px",
              outline: "none",
              width: "250px",
              height: "50px",
              borderRadius: "3.5px",
            }}
            value={data.type_}
            onChange={(e) => handle(e)}
          >
            <option value="Communication">Communication</option>
            <option value="Cooking">Cooking</option>
            <option value="Tuitions">Tuitions</option>
            <option value="Singer">Singer</option>
          </select>
          <div className="mb-3"></div>
          <button
            onClick={() => {
              alert("Data submitted succesfully");
            }}
          >
            {" "}
            Add course{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </>
  );
}
