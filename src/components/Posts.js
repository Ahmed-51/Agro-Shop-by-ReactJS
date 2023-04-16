/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import * as React from 'react';
import CardItem from './CardItem'
import '../App.css'

const Posts = () => {
  return (
    <div className='cards-entire'>
        <div className="cards-head">
            <span className='cards-head-p'>Recent posts</span>
        </div>

        <div className='cards-main' >
            <CardItem title="Market Presence & Global Locations"
                    photo= {require("../images/cow2.jpg")}
                    content="This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like."
            />

            <CardItem title="Market Presence & Global Locations"
                    photo= {require("../images/cow2.jpg")}
                    content="This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like."
            />


            <CardItem title="Market Presence & Global Locations"
                    photo= {require("../images/cow2.jpg")}
                    content="This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like."
            />


            
            <CardItem title="Market Presence & Global Locations"
                    photo= {require("../images/cow2.jpg")}
                    content="This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like."
 
            />


            
            <CardItem title="Market Presence & Global Locations"
                    photo= {require("../images/cow2.jpg")}
                    content="This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like."
            />

            <CardItem title="Market Presence & Global Locations"
                    photo= {require("../images/cow2.jpg")}
                    content="This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like."
            />
        </div>
    </div>
  )
}

export default Posts