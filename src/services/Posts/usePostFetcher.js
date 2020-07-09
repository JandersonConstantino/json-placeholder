import { useCallback } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const usePostFetcher = id => {
  const { isLoading, data, error } = useQuery('post', () => axios.get(`posts/${id}`))
  const post = useCallback(data?.data || {}, [data])
  console.log('post', post)

  return { post, error, isLoading }
}

export default usePostFetcher
