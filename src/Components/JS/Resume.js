import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { NavLink } from "react-router-dom"
export default function Resume() {
  return (
    <>

<div style={{textAlign:"center"}}>
      <h3 style={{textAlign:"center"}}>Personal Information</h3>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
        />
       <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          defaultValue=""
        />
       <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="City"
          defaultValue=""
        />
      </div>
    </Box>
    </div>
    <div  style={{textAlign:"center"}}>
      <h3 style={{textAlign:"center"}}>Education Information</h3>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Acamedic Qualification"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label="Past Qualification"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label=" current qualification"
          defaultValue=""
        />
      </div>
    </Box>
    </div>
    <div  style={{textAlign:"center"}}>
      <h3 style={{textAlign:"center"}}>Experience</h3>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Job Title"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label="employeer"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label=" course certification"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label=" Past EXperience"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label=" Describe the job role"
          defaultValue=""
        />
      </div>
    </Box>
    </div>
    <div  style={{textAlign:"center"}}>
      <h3 style={{textAlign:"center"}}>Education Information</h3>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Acamedic Qualification"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label="Past Qualification"
          defaultValue=""
        />
        <TextField
          
          id="outlined-disabled"
          label=" current qualification"
          defaultValue=""
        />
      </div>
    </Box>
    </div>
    <div  style={{textAlign:"center"}}>
      <h3  style={{textAlign:"center"}}>Skills</h3>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="academic skills"
          defaultValue=""
        />
        <TextField
          id="outlined-disabled"
          label="Soft skill"
          defaultValue=""
        />
        <TextField
          id="outlined-disabled"
          label="others"
          defaultValue=""
        />
      </div>
    </Box>
    </div>
   <div style={{display:"flex", alignItems:"center",margin:"auto",paddingLeft:"50%"}}>
 <Button variant="contained" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      save 
    </Button>
   </div>



    
   
      
    
    </>
  );
}
