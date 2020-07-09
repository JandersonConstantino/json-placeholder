import { Home, Post } from 'pages'

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/post/:id', component: Post }
]

export default routes
