import React from 'react'
import { Container, Logo } from './styles'
import HeaderContainer from '../containers/HeaderContainer'

function Header() {
  return (
    <HeaderContainer>
      {({ onClick, urlImage }) => (
        <Container>
          <Logo src={urlImage} onClick={onClick} />
        </Container>
      )}
    </HeaderContainer>
  )
}

export default Header
