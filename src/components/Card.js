import React from 'react'
import { Div, Img, Container,Para,Box2,Button } from '../style/CompStyle'

const Card = ({ post }) => {
  return (
    <>
      <Container>

        <Div >
        <Para variant="big">{post.title.split(" ").splice(0,3).join(" ")}</Para>
          <div><Img src={post.thumbnail} /></div>
          
          <Para >{post.description.split(" ").slice(0,5).join(" ")+"...."}</Para>
          <Box2>
           <Para variant="big">${post.price}</Para>
            <Button>Add To Cart</Button>
          </Box2>
        </Div>

      </Container>

    </>
  )
}

export default Card
