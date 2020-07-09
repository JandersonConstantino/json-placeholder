import React from 'react'
import { Col } from 'react-flexbox-grid'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'
import Loading from 'components/Loading/components'
import Modal from 'components/Modal/components'
import PostsContainer from '../containers/PostsContainer'
import PostItem from './PostItem/components'

function Posts() {
  const { t } = useTranslation()

  return (
    <PostsContainer>
      {({
        posts,
        limit,
        loading,
        onClickDelete,
        showModal,
        onCancelModal,
        onConfirmModal
      }) => (
        <Container center="lg" id="scroll-list">
          <Col xs={12} lg={6}>
            {posts.slice(0, limit).map(item => (
              <PostItem
                key={item.id}
                {...item}
                onClickDelete={e => onClickDelete(e, item)}
              />
            ))}
          </Col>
          {loading && <Loading />}
          {showModal && (
            <Modal
              onCancel={onCancelModal}
              onConfirm={onConfirmModal}
              header={t('REMOVE_POST_QUESTION')}
              description={t('DESCRIPTION_MODAL_REMOVE_POST')}
            />
          )}
        </Container>
      )}
    </PostsContainer>
  )
}

export default Posts
