/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import * as React from 'react';
import {Box, Grid} from '@mui/material';
import ProductItem from './ProductItem';
import '../App'

const MainProducts = () => {
  return (
    <div className="main-prods">
    <Box sx={{ flexGrow: 1 , position:'relative', top:'40px', left: '10%', right:'10%', width:'80%'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={5} style={{paddingBottom:"40px"}}>
                <h1 className='para'><i>Lorem ipsum dolor sit amet consectetur</i> </h1>
                <p className='para-text'><i>Lorem ipsum dolor similique, saepe dolore? Eligendi  eius fugit nemo quae aliquid mollitia? Magni voluptas, at esse eveniet dolorum neque, laborum, sit repellat molestias ea dolore nihil expedita itaque distinctio beatae id doloribus corrupti sequi sed. Quam sit magnam earum eos nihil distinctio at voluptate, explicabo tenetur quibusdam illo quidem minima commodi cumque unde magni accusantium dicta dolore molestiae reprehenderit officiis! Illo quia eligendi aut illum ipsa quidem.</i></p>
            </Grid>

            <Grid container xs={12} md={7} >
                <Grid item xs={12} md={4} className='grid-item-entire'>
                    <div className="grid-item-actual">
                        <ProductItem link= "https://www.facebook.com/" photo={require("../images/cow2.jpg")} text="Edible Oil"  /> 
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className='grid-item-entire'>
                    <div className="grid-item-actual">
                        <ProductItem link= "https://www.facebook.com/" photo={require("../images/cow2.jpg")} text="Edible Oil"  /> 
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className='grid-item-entire'>
                    <div className="grid-item-actual">
                        <ProductItem link= "https://www.facebook.com/" photo={require("../images/cow2.jpg")} text="Edible Oil"  /> 
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className='grid-item-entire'>
                    <div className="grid-item-actual below">
                        <ProductItem link= "https://www.facebook.com/" photo={require("../images/cow2.jpg")} text="Edible Oil"  /> 
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className='grid-item-entire'>
                    <div className="grid-item-actual below">
                        <ProductItem link= "https://www.facebook.com/" photo={require("../images/cow2.jpg")} text="Edible Oil"  /> 
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className='grid-item-entire'>
                    <div className="grid-item-actual below">
                        <ProductItem link= "https://www.facebook.com/" photo={require("../images/cow2.jpg")} text="Edible Oil"  /> 
                    </div>
                </Grid>

            </Grid>
        </Grid>
        </Box>
    </div>
    
  )
}

export default MainProducts