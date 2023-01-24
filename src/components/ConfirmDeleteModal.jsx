import React from 'react'
import styled from 'styled-components'
import { Modal } from './Modal'

export const ConfirmDeleteModal = ({onClose, onConfirm, deleteMovie,id}) => {
    const deleteMovieList = ()=>{
        onConfirm()
        deleteMovie(id)
    }
  return (
    <Modal onClose={onClose}>
        <DeleteModalContainer>
        <div>
            <h2>Are you sure?</h2>
        </div>
        <ButtonDiv>
            <NoButton onClick={onClose}>No</NoButton>
            <YesButton onClick={deleteMovieList}>Yes</YesButton>
        </ButtonDiv>
        </DeleteModalContainer>
    </Modal>
  )
}

const ButtonDiv = styled.div`
    display: flex;
    justify-content:space-between;
`

const DeleteModalContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    z-index: 101;
    background: white;
    border-radius: 10px;
    top: 25vh;
    left: 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 20rem;
    height: 9rem;
    margin-left: 25rem;
`
const NoButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #58a5f3;
    color: white;
    border: #efc744;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    margin-right: 1rem;
    cursor: pointer;
    font: inherit;
    &:hover,
    &:active {
    background: #f46a0f;
    border-color: #f67722;}
`
const YesButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #f15c6b;
    color: white;
    border: #efc744;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    cursor: pointer;
    font: inherit;
    &:hover,
    &:active {
    background: #f46a0f;
    border-color: #f67722;}
`