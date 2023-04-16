/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import * as React from 'react';
import { Box, Grid, Button, Link} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../App'

  

const Solution = () => {
  return (
    <div className="solution">
        <Box sx={{position:'relative', top:'90px', left: '5%', right:'5%', width:'90%'}}>
            <Grid container >
                <Grid item xs={12} md={3} style={{height: '65vh',  marginBottom:'calc(10px + 2vh)' }}>
                    <img src= {require("../images/boy.jpg")} alt='boy' style={{width:'90%', height: '100%'}} className="center"/>
                </Grid>

                <Grid container xs={12} md={3}>
                    <Grid item xs={12} style={{height: '41vh', marginBottom:'calc(10px + 2vh)'}}>
                        <img src= {require("../images/girl.jpg")} alt='boy' style={{width:'90%', height: '100%'}} className="center"/>
                    </Grid>
                    <Grid item xs={12} style={{height: '20vh', marginBottom:'calc(10px + 2vh)'}} >
                        <div style={{width: '90%', height:"100%" }} className='text center exp'>
                            <h1>25 Years Experience</h1>
                        </div>
                    </Grid>
                </Grid>


                <Grid item xs={12} md={6} style={{height: '65vh', marginBottom:'calc(60px - 2vw)', paddingLeft:'calc(10px + 2vh)'}}>
                    <h1 className='para'><i>Lorem ipsum dolor sit amet consectetur</i> </h1>
                    <p className='para-text'><i>Lorem ipsum dolor similique, saepe dolore? Eligendi  eius fugit nemo quae aliquid mollitia? Magni voluptas, at esse eveniet dolorum neque, laborum, sit repellat molestias ea dolore nihil expedita itaque distinctio beatae id doloribus corrupti sequi sed. Quam sit magnam earum eos nihil distinctio at voluptate, explicabo tenetur quibusdam illo quidem minima commodi cumque unde magni accusantium dicta dolore molestiae reprehenderit officiis! Illo quia eligendi aut illum ipsa quidem.</i></p>
                    <Link href="#" underline="none" sx={{textDecoration: 'none'}}>
                        <Button variant="contained" size="large" endIcon={<ArrowCircleRightIcon />} style={{backgroundColor:'#6CBE03', borderRadius:'20px'}}>
                            Learn More
                        </Button>
                    </Link>
                </Grid>


                <Grid container xs={12}>
                    <Grid item xs={6} md={3} style={{height: '24vh',  marginBottom:'calc(10px + 2vh)'}}>
                    <img src= {require("../images/boy.jpg")} alt='boy' style={{width:'100%', height: '100%'}}/>
                    </Grid>
                    <Grid item xs={6} md={3} style={{height: '24vh',  marginBottom:'calc(10px + 2vh)'}}>
                        <div style={{width: '100%', height:"100%" }} className='text center'>
                            <h1 >100 +<br />Total products</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3} style={{height: '24vh',  marginBottom:'calc(10px + 2vh)'}}>
                        <div style={{width: '100%', height:"100%" }} className='text center'>
                            <h1>2605 +<br />Satisfied Clients</h1>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3} style={{height: '24vh',  marginBottom:'calc(10px + 2vh)'}}>
                        <div style={{width: '100%', height:"100%" }} className='text center'>
                            <h1 >1570 +<br />Projects Completed</h1>
                        </div>
                    </Grid>   
                </Grid>
            </Grid>
        </Box>
    </div>

  )
}

export default Solution