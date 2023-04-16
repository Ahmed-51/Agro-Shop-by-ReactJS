/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {Grid, Avatar, Link } from '@mui/material';
import '../App'
import { jsx, css } from '@emotion/react'



const ProductItem = ({link, photo, text}) => {
  return (
    <Link href={link} underline="none" sx={{textDecoration: 'none'}}>   
      <div className='prod-item'>
          <Avatar alt="ediable oil" src= {photo}
          css={{
              height: '90px',
              width: '90px',
          }}
          />
      </div>
      <h3 style={{color:'#fff', fontSize:'clamp(10px, 3vw, 18px)', textAlign: "center"}}>{text}</h3>
    </Link>
  )
}

export default ProductItem