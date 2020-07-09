import React from 'react'
import { useTranslation } from 'react-i18next'
import ModalContainer from '../containers/ModalContainer'
import {
  Background,
  Container,
  Header,
  Description,
  ButtonConfirm,
  ButtonCancel,
  Footer,
} from './styles'

function Modal(props) {
  const { t } = useTranslation()

  return (
    <ModalContainer {...props}>
      {({ ref, onConfirm, onCancel, header, description }) => (
        <Background>
          <Container ref={ref}>
            <Header>{header}</Header>
            <Description>{description}</Description>
            <Footer>
              <ButtonCancel onClick={onCancel}>
                {t('BTN_CANCEL')}
              </ButtonCancel>
              <ButtonConfirm onClick={onConfirm}>
                {t('BTN_CONFIRM')}
              </ButtonConfirm>
            </Footer>
          </Container>
        </Background>
      )}
    </ModalContainer>
  )
}

export default Modal
