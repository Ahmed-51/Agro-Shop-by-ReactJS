import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper} from '@mui/material';
import '../App'



function Carousell(props) {

  const items = [
    {
        name: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elitipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae, incidunt consectetur maxime unde ab',
        picture: require('../images/cow1.jpg'),
    },
    {
        name: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis officia nesciunt nisi ab, qui magni inventore quas laboriosam veritatis',
        picture: require('../images/cow2.jpg'),
    },
    {
      name: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae, incidunt consectetur maxime unde ab',
      picture: require('../images/goat1.jpg'),
  },
  {
      name: 'Lorem ipsum dolor sit',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis officia nesciunt nisi ab, qui magni inventore quas laboriosam veritatis',
      picture: require('../images/goat2.jpg'),
  },
  ]

    return (
        <div style={{ paddingBottom:'12px'}}>
            <Carousel >
                {items.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </Carousel>
        </div>
    );
}


const Item = ({name, description, picture}) => {
    return (
        <Paper style={{ position: 'relative'}} >
            <img src={picture} alt='carousel' style={{width:'100vw', height: '65vh'}}/>
              <div className="shade">
                <div className='content'>
                  <h2 className='name' ><i><b>{name}</b></i></h2>
                  <div className="description"><i>{description}</i></div>
                </div>
              </div>

        </Paper>
    );
};


export default Carousell;