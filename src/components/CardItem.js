/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import * as React from 'react';
import {Card, CardHeader, CardContent, CardMedia, CardActions, Typography, Button, Link} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../App'


const breakpoints = [600, 900, 1200, 1536]
const bp = breakpoints.map(i => `@media (max-width: ${i}px)`)


const CardItem = ({title,photo,content, media_req, button_req}) => {

  return (
    <Card className='carditem'>
    {  media_req &&  <CardMedia
        component="img"
        height="180px"
        image={photo}
        alt="Cows"
      />}

      <CardHeader
        title={title}
        titleTypographyProps={{fontSize:'22px', fontWeight:'600', fontFamily: 'Livvic' }}
        sx={{
            color: '#6CBE03'
        }}
      />
      <CardContent >
            <p className='card-text'>{content}</p>
      </CardContent>

  {  button_req &&  <CardActions>
          <Link href="#" underline="none" sx={{color:'#6CBE03', textDecoration: 'none', marginLeft:'85%', marginTop: '-30px'}}>
              <ArrowCircleRightIcon fontSize='large' />
          </Link>
      </CardActions>}

    </Card>
  )
}

CardItem.defaultProps = {
  media_req: 'true',
  button_req: 'true'
}

export default CardItem