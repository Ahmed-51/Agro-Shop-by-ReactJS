import React from 'react'
import ProductPage from '../components/ProductPage'
import CardItem from '../components/CardItem'


const Sugar = () => {
  return (
    <div>
        <ProductPage 
            name1 = "Sugar"
            name2 = "Sugar"
            picture = {require('../images/cow2.jpg')}
            description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur rerum iure vel dicta commodi voluptatum provident aperiam, incidunt expedita non nisi officia fugit neque unde corporis nam perferendis. Asperiores ipsa architecto, dicta veniam quis, nulla dolorem dolores voluptatibus ratione ducimus repellendus! Inventore, quia. Sit dolorem, quos beatae illo officia numquam rerum ab enim dolores nesciunt eaque id. Aut hic rerum doloribus magni maxime fugiat quibusdam ad at reprehenderit quos laborum, eaque voluptas, eum, ipsum mollitia consectetur incidunt harum. Ea?"
            button = {true}
            desc={true}
        />


        <div className='cards-entire'>
            <div className="cards-head">
                <span className='cards-head-p cards-head-span'>Most Popular Items</span>
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
    </div>
  )
}

export default Sugar

