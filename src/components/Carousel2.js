import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper} from '@mui/material';
import '../App'



function Carousel2({name}) {

  const items = [
    {
        picture: require('../images/cow1.jpg'),
    },
    {
        picture: require('../images/cow2.jpg'),
    },
    {
      picture: require('../images/goat1.jpg'),
      
  },
  {
      picture: require('../images/goat2.jpg'),
  },

  ]

    return (
        <div style={{ paddingBottom:'12px'}}>
            <Carousel >
                {items.map((item, i) => (
                    <Item name={name} key={i} {...item} />
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
                <div className='content2'>
                  <h2 className='name2'><b>{name}</b></h2>
                </div>
              </div>

        </Paper>
    );
};


export default Carousel2;