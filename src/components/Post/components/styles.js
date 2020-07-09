import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.text.colorDark};
  text-transform: uppercase;
  text-align: left;
`

const Body = styled.section`
  text-align: justify;
  text-justify: inter-word;
  color: ${({ theme }) => theme.text.color};
`

export { Container, Title, Body }