import { useMutation } from 'react-query'
import axios from 'axios'

const usePostDelete = id => {
  const [deletePost] = useMutation(() => axios.delete(`posts/${id}`))

  return { deletePost }
}

export default usePostDelete
