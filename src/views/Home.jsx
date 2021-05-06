import React from 'react'
import { Segment, Image, Button, Grid, Container, Stylesheet} from 'semantic-ui-react'

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
                        <h1>Ready to cook delicious Thai food!</h1>
                        <Button className = 'Start' color='yellow' size='huge'>Start</Button> 
                    </div>
                </div>
                
        </div>

    )
}
