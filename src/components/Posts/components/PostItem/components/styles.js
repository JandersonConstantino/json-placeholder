import styled, { keyframes } from 'styled-components'

const FadeInAnimation = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.text.colorLight};
  border-radius: 4px;
  animation: 0.15s ${FadeInAnimation} ease-out;
  margin: 8px;
  padding: 4px;
  cursor: pointer;
  display: flex;

  &:hover {
    transform: scale(1.03)
  }
`

const Title = styled.span`
  color: ${({ theme }) => theme.main.primary};
  display: block;
  text-transform: uppercase;
  margin-bottom: 5px;
`

const Body = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  color: ${({ theme }) => theme.text.color};
`

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & > img {
    width: 40px;
    height: auto;
  }
`

const ContentText = styled.div`
  display: block;
  width: 90%;
`

export { Container, Title, Body, Button, ContentText }
