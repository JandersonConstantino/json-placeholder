import t from 'prop-types'
import { useHistory } from 'react-router-dom'

function PostItemContainer({ children, id, title, body, onClickDelete }) {
  const history = useHistory()

  const onClick = e => {
    e.stopPropagation();
    history.push(`post/${id}`)
  };

  return children({ id, title, body, onClick, onClickDelete })
}

PostItemContainer.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  body: t.string.isRequired,
  children: t.func.isRequired,
  onClickDelete: t.func.isRequired
}

export default PostItemContainer
