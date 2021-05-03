import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function Favorite() {
    return (
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
    )
}
