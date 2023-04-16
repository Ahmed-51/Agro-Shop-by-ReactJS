import React from 'react'
import Carousell from '../components/Carousel'
import Category from '../components/Topcatagories'
import Solution from '../components/Solution'
import Cards from '../components/Cards'
import MainProducts from '../components/MainProducts'
import Formview from '../components/Formview'


const Home = () => {
  return (
    <>
      <Carousell/>
      <Category />
      <Solution />
      <Cards />
      <MainProducts />
      <Formview />
    </>
  )
}

export default Home