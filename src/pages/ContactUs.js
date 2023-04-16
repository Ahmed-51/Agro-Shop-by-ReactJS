import React from 'react'
import ProductPage from '../components/ProductPage'
import Posts from '../components/Posts'
import '../App'
import {Box, Grid, Link, TextField } from '@mui/material';




const ContactUs = () => {
  return (
    <div>
        <ProductPage 
            name1= "Contact Us"
            name2= "Contact Us"
            picture = {require('../images/cow2.jpg')}
            description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur rerum iure vel dicta commodi voluptatum provident aperiam, incidunt expedita non nisi officia fugit neque unde corporis nam perferendis. Asperiores ipsa architecto, dicta veniam quis, nulla dolorem dolores voluptatibus ratione ducimus repellendus! Inventore, quia. Sit dolorem, quos beatae illo officia numquam rerum ab enim dolores nesciunt eaque id. Aut hic rerum doloribus magni maxime fugiat quibusdam ad at reprehenderit quos laborum, eaque voluptas, eum, ipsum mollitia consectetur incidunt harum. Ea?"
            button = {false}
            desc= {false}
            name_sec = {false}
        />






    <div className='cards-entire' style={{backgroundColor:'#fff'}}>

        <div>
            <Box sx={{ flexGrow: 1, position:'relative', left: '5%', right:'5%', width:'90%'}}>
                <Grid container>
                    <Grid item xs={12} md={5} style={{textAlign:'left', marginBottom:'30px'}} >
                        <div className="cards-head">
                            <span className='cards-head-p'>Get in touch with us!</span>
                        </div>
                        <div>
                            <p style={{ width:'90%', position:'relative', left:'5%', marginTop:'90px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur ducimus iure dolore delectus itaque consectetur adipisicing elit. Ea consequuntur doloremque voluptatem officia numquam quia.</p> 
                        </div> 
                        <div style={{fontSize:'18px', fontWeight:'500', paddingBottom:'15px', color:'#6CBE03'}}>
                            <div style={{marginRight:'15px', display:'inline-block'}}><i class="fa-solid fa-map-location-dot fa-beat"></i></div> <span>Rod Araxa A Patos De Minas A 18 SN, Zona Rural - MG</span>  
                        </div>
                        <div style={{fontSize:'18px', fontWeight:'500', paddingBottom:'15px', color:'#6CBE03'}}>
                            <div style={{marginRight:'15px', display:'inline-block'}}><i class="fa-solid fa-phone fa-beat"></i></div> <span>+55 21 3500 1940</span>  
                        </div>
                        <div style={{fontSize:'18px', fontWeight:'500', paddingBottom:'15px', color:'#6CBE03'}}>
                            <div style={{marginRight:'15px', display:'inline-block'}}><i class="fa-solid fa-envelope-open-text fa-beat"></i></div> <span>Sales@agro-jaborandi.com</span>  
                        </div>       
                    </Grid>






                    <Grid item xs={12} md={7} style={{textAlign:'left', marginBottom:'30px', marginTop:'70px'}} >
           
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
                                id="name"
                                label="Full Name"
                                color="primary" 
                                focused
                                />
                                <TextField
                                required
                                id="mail"
                                label="E-mail"
                                color="primary" 
                                focused
                                
                                />
                                <TextField
                                required
                                id="subject"
                                label="Subject"
                                color="primary" 
                                focused
                                />

                                <TextField
                                id="company"
                                label="Company"
                                color="primary" 
                                focused
                                />


                            <TextField
                                id="outlined-multiline-static"
                                label="Your Message"
                                multiline
                                rows={4}
                                color="primary" 
                                focused
                            />


                            



                            </div>
                        </Box>
                    </Grid>



                </Grid>
            </Box>

        </div>

    </div>


    <Posts />

    </div>
  )
}

export default ContactUs

