import styled from 'styled-components'

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 500;
  background-color: rgba(188, 188, 188, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  background-color: #fff;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
`

const Header = styled.span`
  display: block;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.color};
  font-size: 20px;
  margin-bottom: 20px;
`

const Description = styled.span`
  display: block;
  margin-top: 55px;
  margin-bottom: 55px;
`

const ButtonConfirm = styled.button`
  border-radius: 4px;
  background: ${({ theme }) => theme.button.danger};
  color: #fff;
  width: 100px;
  cursor: pointer;
  border: none;
`

const ButtonCancel = styled.button`
  border-radius: 4px;
  background: ${({ theme }) => theme.button.cancel};
  color: ${({ theme }) => theme.text.color};
  width: 100px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.text.colorLight};
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  position: relative;
  bottom: 0;

  & > button + button {
    margin-left: 10px;
  }
`

export {
  Background,
  Container,
  Header,
  Description,
  ButtonConfirm,
  ButtonCancel,
  Footer,
}
