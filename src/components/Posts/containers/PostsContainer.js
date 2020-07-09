import { useState, useEffect, useCallback } from 'react'
import usePostsFetcher from 'services/Posts/usePostsFetcher'
import usePostDelete from 'services/Posts/usePostDelete'

function PostsContainer({ children }) {
  const [limit, setLimit] = useState(10)
  const [loading, setLoading] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)
  const { posts, isLoading, refetch } = usePostsFetcher()
  const { deletePost } = usePostDelete(itemToDelete?.id)
  const showModal = useCallback(!!itemToDelete, [itemToDelete])

  const onFinishList = () => {
    setLoading(true)

    setTimeout(() => {
      setLimit(limit + 10)
    }, 500)
  }

  const onInfiniteScroll = event => {
    const element = event.target

    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      onFinishList();
    }
  };

  const onLoadAndDestroy = () => {
    const element = document.getElementById('scroll-list')
    element && element.addEventListener('scroll', onInfiniteScroll)

    return () => {
      element && element.removeEventListener('scroll', onInfiniteScroll)
    }
  }

  const onFetching = () => {
    setLoading(isLoading)
  }

  const onClickDelete = (e, item) => {
    e.stopPropagation()
    setItemToDelete(item)
  }

  const onCancelModal = () => {
    setItemToDelete(null)
  }

  const onConfirmModal = async () => {
    try {
      await deletePost()
      refetch()
      setItemToDelete(null)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(onFetching, [isLoading])
  useEffect(onLoadAndDestroy, [
    limit,
    setLimit,
    onFinishList,
    onInfiniteScroll
  ])

  return children({
    posts,
    limit,
    loading,
    onClickDelete,
    showModal,
    onCancelModal,
    onConfirmModal
  })
}

export default PostsContainer
