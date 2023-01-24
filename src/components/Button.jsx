import React from 'react'
import styled from 'styled-components'

export const Button = ({onClick,children,background}) => {
  return (
    <div>
        <Buttonn onClick={onClick} style={{background:`${background}`}}>{children}</Buttonn>
    </div>
  )
}
const Buttonn = styled.button`
    padding: 0.5rem 1rem;
    background-color: #f67722;
    color: white;
    border: #efc744;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    cursor: pointer;
    font: inherit;
    margin-left: 40px;
    &:hover,
    &:active {
    background: #f46a0f;
    border-color: #f67722;}
`