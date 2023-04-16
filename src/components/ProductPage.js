import React from 'react';
import { Paper} from '@mui/material';
import '../App'
import {Button, Link} from '@mui/material';


function ProductPage({name1, name2, picture, description, button, desc, name_sec}) {

    return (
        <div>
            <Paper style={{ position: 'relative'}} >
                <img src={picture} alt='carousel' style={{width:'100vw', height: '65vh'}}/>
                <div className="shade">
                    <div className='content2'>
                        <h2 className='name2'><b>{name1}</b></h2>
                    </div>
                </div>


                {name_sec && <h2 className='para' style={{textAlign:'center'}}><b>{name2}</b></h2>}
                {desc && <div className="para-text" style={{width:"70%", position:'relative', left:"15%", right:"15%", paddingBottom: '40px'}}><i>{description}</i></div>}
                
                
                {button && <Link href="contactus" underline="none" sx={{textDecoration: 'none'}}>
                        <div style={{textAlign:'center'}}>
                            <Button variant="contained" size="large" style={{backgroundColor:'#6CBE03', borderRadius:'5px', 
                                                                            marginBottom: '50px'}}>
                                <b>Contact Us to Inquire</b>
                            </Button>
                        </div>
                    </Link>
                }

            </Paper>
        </div>
    );
}


ProductPage.defaultProps = {
    name_sec: 'true'
  }



export default ProductPage;