import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components';

export const Modal = ({onClose, children}) => {
  return (
    <>
    {createPortal(
        <>
        <Backdrop onClick={onClose}/>
        <div onClick={onClose}/>
        <div>
            <div>{children}</div>
        </div>
        </>,
        document.getElementById("modal")
    )}
    </>
  )
}

const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
    cursor: pointer;
`