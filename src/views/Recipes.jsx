
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const Recipes = () => (

  <Card.Group>
    <Card>
      <Image src="images/MassamanCurry.jpg" alt="Massaman Curry" size='medium' />
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

    <Card>
      <Image src="images/mango.jpg" alt="Sweet Sticky Rice and Mango" size='medium' />
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

    <Card>
      <Image src="images/kapraw.jpg" alt="Pad Kapraw" size='medium' />
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

    <Card>
      <Image src="images/tomkha.jpg" alt="Coconut Soup(Tom Kha Kai)" size='medium' />
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


    <Card>
      <Image src="images/padthai.jpg" alt="Pad Thai" size='medium' />
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


  </Card.Group>
)

export default Recipes
