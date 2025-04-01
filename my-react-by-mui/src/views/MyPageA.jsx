import React from "react";
import { Typography } from "@mui/material";

function MyPageA() {
    return (
    <>
       <div>
       <h1>สวัสดีชาวโลก Hello WowId!</h1> 
       </div>
       <Typography variant="h1">
        สวัสดีชาวโลก Hello WowId!
       </Typography>
       <hr />

       <div style={{color: 'red',fontSize: '40px',marginLeft: '100px'}}>
          สวัสดี IOT SAU
       </div>
       <Typography sx={{color: 'salmon',fontSize: '35px', ml: '100px'}}>
            สวัสดี IOT SAU
       </Typography>
    </>
)
}

export default MyPageA;