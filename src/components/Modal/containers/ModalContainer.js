import { useEffect, useRef } from 'react'

function ModalContainer({
  children,
  onCancel,
  onConfirm,
  header,
  description
}) {
  const ref = useRef(null);

  const onMouseDown = event => {
    if (!ref?.current?.contains(event.target)) {
      onCancel()
    }
  };

  const onKeyDown = event => {
    if (event.keyCode === 27) {
      onCancel()
    }
  }

  const defindeListners = () => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  };

  useEffect(defindeListners, [
    onMouseDown,
    onKeyDown,
    ref,
    onCancel
  ])

  return children({
    ref,
    onConfirm,
    onCancel,
    header,
    description
  })
}

export default ModalContainer
