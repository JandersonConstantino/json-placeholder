import React from 'react'
import { Image, Container } from './styles'

function Loading() {
  return (
    <Container>
      <Image src={require('assets/loading.gif')} />
    </Container>
  )
}

export default Loading
