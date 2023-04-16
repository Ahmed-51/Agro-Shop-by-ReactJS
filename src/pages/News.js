import React from 'react'
import ProductPage from '../components/ProductPage'
import Posts from '../components/Posts'
import CardItem from '../components/CardItem'
import '../App'
import {Box, Grid, Link } from '@mui/material';



const News = () => {
  return (
    <div>
        <ProductPage 
            name1= "News"
            name2= "Videos"
            picture = {require('../images/cow2.jpg')}
            description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur rerum iure vel dicta commodi voluptatum provident aperiam, incidunt expedita non nisi officia fugit neque unde corporis nam perferendis. Asperiores ipsa architecto, dicta veniam quis, nulla dolorem dolores voluptatibus ratione ducimus repellendus! Inventore, quia. Sit dolorem, quos beatae illo officia numquam rerum ab enim dolores nesciunt eaque id. Aut hic rerum doloribus magni maxime fugiat quibusdam ad at reprehenderit quos laborum, eaque voluptas, eum, ipsum mollitia consectetur incidunt harum. Ea?"
            button = {false}
            desc= {false}
            name_sec = {false}
        />






    <div className='cards-entire'>
        <div className="cards-head">
            <span className='cards-head-p'>Videos</span>
        </div>

        <div>
            <Box sx={{ flexGrow: 1, position:'relative', top:'70px', left: '5%', right:'5%', width:'90%'}}>
                <Grid container>
                    <Grid item xs={12} md={6} style={{textAlign:'center', marginBottom:'30px'}} >
                        <div><iframe width="380" height="170" src="https://www.youtube.com/embed/zfsEr2rsOro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                        <div>
                            <h3>Grow Your Business with Agro Jaborandi</h3>
                            <p style={{textAlign:'left', width:'90%', position:'relative', left:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur ducimus iure dolore delectus itaque consectetur adipisicing elit. Ea consequuntur doloremque voluptatem officia numquam quia.</p> 
                        </div>         
                    </Grid>


                    <Grid item xs={12} md={6} style={{textAlign:'center', marginBottom:'30px'}} >
                        <div><iframe width="380" height="170" src="https://www.youtube.com/embed/zfsEr2rsOro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                        <div>
                            <h3>Grow Your Business with Agro Jaborandi</h3>
                            <p style={{textAlign:'left', width:'90%', position:'relative', left:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur ducimus iure dolore delectus itaque consectetur adipisicing elit. Ea consequuntur doloremque voluptatem officia numquam quia.</p> 
                        </div>         
                    </Grid>



                    <Grid item xs={12} md={6} style={{textAlign:'center', marginBottom:'30px'}} >
                        <div><iframe width="380" height="170" src="https://www.youtube.com/embed/zfsEr2rsOro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                        <div>
                            <h3>Grow Your Business with Agro Jaborandi</h3>
                            <p style={{textAlign:'left', width:'90%', position:'relative', left:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur ducimus iure dolore delectus itaque consectetur adipisicing elit. Ea consequuntur doloremque voluptatem officia numquam quia.</p> 
                        </div>         
                    </Grid>


                    <Grid item xs={12} md={6} style={{textAlign:'center', marginBottom:'30px'}} >
                        <div><iframe width="380" height="170" src="https://www.youtube.com/embed/zfsEr2rsOro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                        <div>
                            <h3>Grow Your Business with Agro Jaborandi</h3>
                            <p style={{textAlign:'left', width:'90%', position:'relative', left:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur ducimus iure dolore delectus itaque consectetur adipisicing elit. Ea consequuntur doloremque voluptatem officia numquam quia.</p> 
                        </div>         
                    </Grid>


                    <Grid item xs={12} md={6} style={{textAlign:'center', marginBottom:'30px'}} >
                        <div><iframe width="380" height="170" src="https://www.youtube.com/embed/zfsEr2rsOro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                        <div>
                            <h3>Grow Your Business with Agro Jaborandi</h3>
                            <p style={{textAlign:'left', width:'90%', position:'relative', left:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur ducimus iure dolore delectus itaque consectetur adipisicing elit. Ea consequuntur doloremque voluptatem officia numquam quia.</p> 
                        </div>         
                    </Grid>


                    <Grid item xs={12} md={6} style={{textAlign:'center', marginBottom:'30px'}} >
                        <div><iframe width="380" height="170" src="https://www.youtube.com/embed/zfsEr2rsOro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                        <div>
                            <h3>Grow Your Business with Agro Jaborandi</h3>
                            <p style={{textAlign:'left', width:'90%', position:'relative', left:'5%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur ducimus iure dolore delectus itaque consectetur adipisicing elit. Ea consequuntur doloremque voluptatem officia numquam quia.</p> 
                        </div>         
                    </Grid>


                </Grid>
            </Box>

        </div>

    </div>


    <Posts />

    </div>
  )
}

export default News

