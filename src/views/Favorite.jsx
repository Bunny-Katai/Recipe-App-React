import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function Favorite() {
    return (
      <div className="FavoriteContainer">
        <Card className="CardOne">
          <Image src="images/kapraw.jpg" alt="Basil Stir Fry" size='medium' />
          <Card.Content>
            <Card.Header>Basil Stir Fry</Card.Header>
            <Card.Description>
              Famous Thai Curry
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
            </a>
          </Card.Content>
        </Card>

        <Card className="CardTwo">
          <Image src="images/mango.jpg" alt="mango sticky rice" size='medium' />
          <Card.Content>
            <Card.Header>Massaman Curry</Card.Header>
            <Card.Description>
              Famous Thai Curry
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
            </a>
          </Card.Content>
        </Card>
        <Card className="CardThree">
          <Image src="images/padthai.jpg" alt="Pad Thai" size='medium' />
          <Card.Content>
            <Card.Header>Pad Thai</Card.Header>
            <Card.Description>
              Stir Fry Noodles
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
            </a>
          </Card.Content>
        </Card>

        <Card className="CardThree">
          <Image src="images/tomkha.jpg" alt="Tom Kha" size='medium' />
          <Card.Content>
            <Card.Header>Coconut Soup</Card.Header>
            <Card.Description>
              Stir Fry Noodles
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
            </a>
          </Card.Content>
        </Card>
        </div>
    )
}
