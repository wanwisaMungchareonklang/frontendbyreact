import React from "react";
import { AppBar, Toolbar, Box, Typography, Avatar, TextField, FormControl, RadioGroup, Radio } from "@mui/material";
import TsunamiIcon from '@mui/icons-material/Tsunami';
import jes from '../assets/jes.jpg';
function MyPageB() {
    return (
        <>
            <Box>
                <AppBar position="static" sx={{ backgroundColor: '#008080' }}>
                    <Toolbar>
                        <TsunamiIcon sx={{ color: 'white' , scale:1.5 }} />
                        <Typography sx={{
                            ml: 2, color: 'white',
                            fontWeight: 'bold', fontSize: '30px' ,flexGrow: 1
                        }}>
                            Jeswork
                        </Typography>
                        <Typography sx={{mr : 2 }}>
                            Wanwisa Mungchareonklang
                        </Typography>
                        <Avatar alt="Jessica" src={jes} variant="rounded" />

                    </Toolbar>
                </AppBar>
            </Box>
                    
            <Box sx={{ mt: 15 ,display: 'flex', 
                flexDirection: 'column',  
                alignItems: 'center'}}>
                <Avatar alt="Jessica" src={jes} variant="rounded" 
            sx={{ width: '300px', height: '300px', ml: '20px', mt: '20px' }}/>
            
                    <Typography sx={{ mt: 2, fontSize: '30px', fontWeight: 'bold' }}>
                        วรรณวิสา มุ่งเจริญกลาง  
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: '20px', fontWeight: 'bold', color: '#008080' }}>
                        ID:6419410021
                    </Typography>
            </Box>
            
            <Box sx={{mt: 5 , width: '75%', mx: "auto", boxShadow: 3, p:2,  display: 'flex', flexDirection: 'column'}}>
                <Typography>ชื่อ-สกุล</Typography>
                <TextField size ="small"/>
                <Box sx={{mt: 2}}/>
                <Typography>เบอร์โทร</Typography>
                <TextField size ="small"/>
                <Box sx={{mt: 2}}/>
                <Typography>เพศ</Typography>
                <FormControl>
                    <RadioGroup row>
                        <FormControl value="female" control={<Radio />} label="Female"/>
                        <FormControl value="male" control={<Radio />} label="male"/>
                        <FormControl value="female" control={<Radio />} label="Female"/>
                    </RadioGroup>
                </FormControl>

                
                
                
            </Box>

            
        </>
    )
}

export default MyPageB;