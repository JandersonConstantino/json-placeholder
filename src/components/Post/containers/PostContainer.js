import usePostFetcher from 'services/Posts/usePostFetcher'
import { useParams } from 'react-router-dom'

function PostContainer ({ children }) {
  const { id: idParam } = useParams()
  const { post, isLoading } = usePostFetcher(idParam)
  const { id, title, body } = post

  return children({ id, title, body, isLoading })
}

export default PostContainer
