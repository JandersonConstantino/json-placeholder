import { useCallback } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const getPosts = () => axios.get('posts')

const usePostsFetcher = () => {
  const { isLoading, data, error, refetch } = useQuery('posts', getPosts)
  const posts = useCallback(data?.data || [], [data])

  return { posts, error, isLoading, refetch }
}

export default usePostsFetcher
