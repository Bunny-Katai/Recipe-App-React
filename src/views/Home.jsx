import React from 'react';
import { Segment, Image, Button, Grid, Container, Stylesheet} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='HomeContainer'>
                <div className="HeroBox">
                    <div className='HeroContainer'>
                        <Image src="images/MassamanCurry.png" alt="Massaman Curry" width='40%' height='25%' style={{ borderBottomLeftRadius: 0 , borderBottomRightRadius: 0}} />    
                    </div>
                </div>
                <div className="BottomBox">
                    <div className='BottomContainer'>
                        <div className = 'Welcome'>Welcome</div>       
                        <div className='Ready'>Ready to cook delicious Thai food!</div>
                        <Button><Link to='recipes' className='HomeButton'>Start</Link></Button>
                    </div>
                </div>
                
        </div>

    )
}
