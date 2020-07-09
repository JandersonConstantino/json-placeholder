import React from 'react'
import PostItemContainer from '../containers/PostItemContainer'
import { Container, Title, Body, Button, ContentText } from './styles'
import Trash from 'assets/trash.svg'

function PostItem(props) {
  return (
    <PostItemContainer {...props}>
      {({ title, body, onClick, onClickDelete }) => (
        <Container onClick={onClick}>
          <ContentText>
            <Title>{title}</Title>
            <Body>{body}</Body>
          </ContentText>
          <Button onClick={onClickDelete}>
            <img  src={Trash} alt="" />
          </Button>
        </Container>
      )}
    </PostItemContainer>
  )
}

export default PostItem
