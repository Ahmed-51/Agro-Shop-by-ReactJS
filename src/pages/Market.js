import React from 'react'
import ProductPage from '../components/ProductPage'
import CardItem from '../components/CardItem'
import Posts from '../components/Posts'


const Quality = () => {
  return (
    <div>
        <ProductPage 
            name1= "Market Presence & Global Locations"
            name2= "Market Presence & Global Locations"
            picture = {require('../images/cow2.jpg')}
            description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur rerum iure vel dicta commodi voluptatum provident aperiam, incidunt expedita non nisi officia fugit neque unde corporis nam perferendis. Asperiores ipsa architecto, dicta veniam quis, nulla dolorem dolores voluptatibus ratione ducimus repellendus! Inventore, quia. Sit dolorem, quos beatae illo officia numquam rerum ab enim dolores nesciunt eaque id. Aut hic rerum doloribus magni maxime fugiat quibusdam ad at reprehenderit quos laborum, eaque voluptas, eum, ipsum mollitia consectetur incidunt harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur rerum iure vel dicta commodi voluptatum provident aperiam, incidunt expedita non nisi officia fugit neque unde corporis nam perferendis. Asperiores ipsa architecto, dicta veniam quis, nulla dolorem dolores voluptatibus ratione ducimus repellendus! Inventore, quia. Sit dolorem, quos beatae illo officia numquam rerum ab enim dolores nesciunt eaque id. Aut hic rerum doloribus magni maxime fugiat quibusdam ad at reprehenderit quos laborum, eaque voluptas, eum, ipsum mollitia consectetur incidunt harum. Ea?"
            button = {false}
            desc= {true}
        />

        <Posts />
    </div>
  )
}

export default Quality

