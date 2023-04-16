/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import * as React from 'react';
import Posts from '../components/Posts'
import '../style/Aboutus.css'
import Carousel2 from '../components/Carousel2'
import { Box, Grid, Button, Link} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';




const Vision = () => {
  return (
    <>
      <Carousel2 name="Our Vision and Mission"/>


      <div className="solution" style={{backgroundColor:'#fff'}}>
         <Box sx={{position:'relative', top:'-10px', left: '10%', right:'10%', width:'80%'}}>
            <h1 className='para' style={{textAlign:'center'}}><i>Our Corporate Compass</i> </h1>


            <Grid container>
                <Grid item xs={12} className='align-logo'>
                    <i class="fa-solid fa-envelope-open-text" style={{marginRight:'30px'}}></i>
                    <i class="fa-solid fa-envelope-open-text"></i>
                </Grid>
            </Grid>
          </Box> 


    <div className='agro' style={{marginTop:'60px'}}>
    <div className='agro-title'><h1 className='para'>Lorem ipsum dolor sit amet consectetur</h1><hr/></div>
    <p className='para-text'>Lorem ipsum dolor similique, saepe dolore? Eligendi  eius fugit nemo quae aliquid mollitia? Magni voluptas, at esse eveniet dolorum neque, laborum, sit repellat molestias ea dolore nihil expedita itaque distinctio beatae id doloribus corrupti sequi sed. Quam sit magnam earum eos nihil distinctio at voluptate, explicabo tenetur quibusdam illo quidem minima commodi cumque unde magni accusantium dicta dolore molestiae reprehenderit officiis! Illo quia eligendi aut illum ipsa quidem</p>
    <p className='para-text'>Lorem ipsum dolor similique, saepe dolore? Eligendi  eius fugit nemo quae aliquid mollitia? Magni voluptas, at esse eveniet dolorum neque, laborum, sit repellat molestias ea dolore nihil expedita itaque distinctio beatae id doloribus corrupti sequi sed. Quam sit magnam earum eos nihil distinctio at voluptate, explicabo tenetur quibusdam illo quidem minima commodi cumque unde magni accusantium dicta dolore molestiae reprehenderit officiis! Illo quia eligendi aut illum ipsa quidem</p>
    <div className='agro-title2'><p>Lorem ipsum dolor </p></div>
    <p className='para-text'>Lorem ipsum dolor similique, saepe dolore? Eligendi  eius fugit nemo quae aliquid mollitia? Magni voluptas, at esse eveniet dolorum neque, laborum, sit repellat molestias ea dolore nihil expedita itaque distinctio beatae id doloribus corrupti sequi sed. Quam sit magnam earum eos nihil distinctio at voluptate, explicabo tenetur quibusdam illo quidem minima commodi cumque unde magni accusantium dicta dolore molestiae reprehenderit officiis! Illo quia eligendi aut illum ipsa quidem</p>
    <p className='para-text'>Lorem ipsum dolor similique, saepe dolore? Eligendi  eius fugit nemo quae aliquid mollitia? Magni voluptas, at esse eveniet dolorum neque, laborum, sit repellat molestias ea dolore nihil expedita itaque distinctio beatae id doloribus corrupti sequi sed. Quam sit magnam earum eos nihil distinctio at voluptate, explicabo tenetur quibusdam illo quidem minima commodi cumque unde magni accusantium dicta dolore molestiae reprehenderit officiis! Illo quia eligendi aut illum ipsa quidem</p>
    <div className='agro-title2'><p>Lorem ipsum dolor </p></div>
    <p className='para-text'>Lorem ipsum dolor similique, saepe dolore? Eligendi  eius fugit nemo quae aliquid mollitia? Magni voluptas, at esse eveniet dolorum neque, laborum, sit repellat molestias ea dolore nihil expedita itaque distinctio beatae id doloribus corrupti sequi sed. Quam sit magnam earum eos nihil distinctio at voluptate, explicabo tenetur quibusdam illo quidem minima commodi cumque unde magni accusantium dicta dolore molestiae reprehenderit officiis! Illo quia eligendi aut illum ipsa quidem</p>
    <p className='para-text'>Lorem ipsum dolor similique, saepe dolore? Eligendi  eius fugit nemo quae aliquid mollitia? Magni voluptas, at esse eveniet dolorum neque, laborum, sit repellat molestias ea dolore nihil expedita itaque distinctio beatae id doloribus corrupti sequi sed. Quam sit magnam earum eos nihil distinctio at voluptate, explicabo tenetur quibusdam illo quidem minima commodi cumque unde magni accusantium dicta dolore molestiae reprehenderit officiis! Illo quia eligendi aut illum ipsa quidem</p>
    
    </div>
                


      </div>
      


      <Posts />
    </>
  )
}

export default Vision