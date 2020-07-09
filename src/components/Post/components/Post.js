import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Loading from 'components/Loading/components'
import PostContainer from '../containers/PostContainer'
import { Container, Title, Body } from './styles'

function Post() {
  return (
    <Row center="lg">
      <Col xs={12} lg={6}>
        <PostContainer>
          {({ title, body, isLoading }) => isLoading ? <Loading /> : (
            <Container>
              <Title>{title}</Title>
              <Body>{body}</Body>
            </Container>
          )}
        </PostContainer>
      </Col>
    </Row>
  )
}

export default Post
