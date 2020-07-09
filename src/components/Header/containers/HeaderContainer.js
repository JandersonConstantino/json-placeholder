import { useHistory } from 'react-router-dom'

const urlImage = "https://www.petz.com.br/novaLoja/images/logo.png"

function HeaderContainer({ children }) {
  const history = useHistory()

  const onClick = () => {
    history.push('/')
  }

  return children({ onClick, urlImage })
}

export default HeaderContainer
