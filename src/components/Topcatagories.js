/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {Divider,Chip, Box, Grid, Avatar, Link } from '@mui/material';
import '../App'
import { jsx, css } from '@emotion/react'
// import { createTheme, ThemeProvider } from '@mui/material/styles';




// const useStyles = makeStyles(theme =>{
//         avatar: {
//             height: '130px',
//             width: '130px',
//             [theme.breakpoints.down('md')]:{
//                 height: '80px',
//                 width: '80px',
//             }
//         },

//         gitem: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems:'center',
//             justifyContent:'center'
//         }
// );


const breakpoints = [600, 900, 1200, 1536]
const bp = breakpoints.map(i => `@media (max-width: ${i}px)`)





export default function Category() {

  return (
    <>
        <div className='divider'>
            <Divider style={{position:'relative', top:'30px'}}>
                <Chip 
                    label="TOP CATEGORIES"
                    sx={{
                        p: '20px 15px',
                        fontSize: '22px',
                        fontWeight: '700',
                        color:'#505050',
                        "&:hover":{backgroundColor:'#75C213'},
                    }}
                />
            </Divider> 


            <Box sx={{ flexGrow: 1, position:'relative', top:'90px', left: '5%', right:'5%', width:'90%'}}>
                <Grid container>

                    <Grid item xs={6} md={2} className='griditem' >
                    <Link href="https://www.facebook.com/" underline="none" sx={{textDecoration: 'none'}}>
                    <Avatar alt="ediable oil" src= {require("../images/cow2.jpg")}
                      css={{
                        height: '120px',
                        width: '120px',
                      }}
                    />
                    <h3 style={{color:'#505050', fontSize:'clamp(10px, 3vw, 18px)', textAlign: "center"}}>Edible Oil</h3>
                    </Link>
                    </Grid>


                    <Grid item xs={6} md={2} className='griditem' >
                    <Link href="https://www.facebook.com/" underline="none" sx={{textDecoration: 'none'}}>
                    <Avatar alt="ediable oil" src= {require("../images/cow2.jpg")}
                      css={{
                        height: '120px',
                        width: '120px',
                      }}
                    />
                    <h3 style={{color:'#505050', fontSize:'clamp(10px, 3vw, 18px)', textAlign: "center"}}>Edible Oil</h3>
                    </Link>
                    </Grid>


                    <Grid item xs={6} md={2} className='griditem' >
                    <Link href="https://www.facebook.com/" underline="none" sx={{textDecoration: 'none'}}>
                    <Avatar alt="ediable oil" src= {require("../images/cow2.jpg")}
                      css={{
                        height: '120px',
                        width: '120px',
                      }}
                    />
                    <h3 style={{color:'#505050', fontSize:'clamp(10px, 3vw, 18px)', textAlign: "center"}}>Edible Oil</h3>
                    </Link>
                    </Grid>


                    <Grid item xs={6} md={2} className='griditem' >
                    <Link href="https://www.facebook.com/" underline="none" sx={{textDecoration: 'none'}}>
                    <Avatar alt="ediable oil" src= {require("../images/cow2.jpg")}
                      css={{
                        height: '120px',
                        width: '120px',
                      }}
                    />
                    <h3 style={{color:'#505050', fontSize:'clamp(10px, 3vw, 18px)', textAlign: "center"}}>Edible Oil</h3>
                    </Link>
                    </Grid>


                    <Grid item xs={6} md={2} className='griditem' >
                    <Link href="https://www.facebook.com/" underline="none" sx={{textDecoration: 'none'}}>
                    <Avatar alt="ediable oil" src= {require("../images/cow2.jpg")}
                      css={{
                        height: '120px',
                        width: '120px',
                      }}
                    />
                    <h3 style={{color:'#505050', fontSize:'clamp(10px, 3vw, 18px)', textAlign: "center"}}>Edible Oil</h3>
                    </Link>
                    </Grid>


                    <Grid item xs={6} md={2} className='griditem' >
                    <Link href="https://www.facebook.com/" underline="none" sx={{textDecoration: 'none'}}>
                    <Avatar alt="ediable oil" src= {require("../images/cow2.jpg")}
                      css={{
                        height: '120px',
                        width: '120px',
                      }}
                    />
                    <h3 style={{color:'#505050', fontSize:'clamp(10px, 3vw, 18px)', textAlign: "center"}}>Edible Oil</h3>
                    </Link>
                    </Grid>

 
                </Grid>
            </Box>
        </div>
    </>

  );
}





