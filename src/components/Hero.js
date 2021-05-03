import React from 'react'
import { Segment, Image, Button, Grid, Container} from 'semantic-ui-react'

export default function Hero() {
    return (
        <div className='HomeContainer'>
                <div className='HeroContainer'>
                     <Image src="images/MassamanCurry.jpg" alt="Sweet Sticky Rice and Mango" width='100%' height='70%'/>    
                </div>
                <div className='BottomContainer'>
                    <Button className = 'Welcome' color='yellow' size='huge'>Welcome</Button>       
                    <h1>Ready to cook delicious Thai food!</h1>
                    <Button className = 'Start' color='yellow' size='huge'>Start</Button> 
                </div>
                
        </div>

    )
}
