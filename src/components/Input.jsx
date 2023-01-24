import React from 'react'
import { forwardRef } from 'react'

export const Input = forwardRef(({children,id,type,onChange},ref) => {
  return (
    <>
    <label htmlFor="id">{children}</label>
    <input onChange={onChange} ref={ref} id={id} type={type} />
    </>
  )
});
