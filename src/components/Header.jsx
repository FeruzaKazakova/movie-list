import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Modal } from './Modal';

export const Header = (props, {onClose}) => {
  const [isModalVisible, setModalVisible] = useState(false); 

  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const ratingInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const movieItemData={
      title: titleInputRef.current.value,
      url: urlInputRef.current.value,
      rating: ratingInputRef.current.value,
      id: Math.round(Math.random() * 12341234),
    };

    props.onSaveMovieItem(movieItemData);
    addMovieHandler();
  }
  const addMovieHandler = () =>{
    setModalVisible((prevState) => !prevState);
  };
  
  return (
    <>
    <Headerr>
      <HeaderTitle>Favorite Movies</HeaderTitle>
      <Button onClick={addMovieHandler}>ADD MOVIE</Button>
    </Headerr>
    { isModalVisible ? (
    <Modal onClose={addMovieHandler} > 
    <form>
      <Modall>
      <ModalContent>
        <Label htmlFor="title">Movie Title</Label>
        <Inputt type="text" name="title" id="title" ref={titleInputRef}/>
        <Label htmlFor="image-url">Image URL</Label>
        <Inputt type="text" name="image-url" id="image-url" ref={urlInputRef}/>
        <Label htmlFor="rating">Your Rating</Label>
        <Inputt
          type="number"
          step="1"
          max="5"
          min="1"
          name="rating"
          id="rating"
          ref={ratingInputRef}
        />
      </ModalContent>
      <ModalActions>
        <CancelButton onClick={addMovieHandler}>Cancel</CancelButton>
        <AddButton onClick={submitHandler}>Add</AddButton>
      </ModalActions>
    </Modall>
    </form>
    </Modal>)
    : null}
    </>
  )
}

const Inputt = styled.input`
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.4rem 0.2rem;
    color: #383838;
  
  &:focus {
    outline: none;
    background: #fff1c4;
  }
`

const Label = styled.label`
    font-weight: bold;
    margin: 0.5rem 0;
    color: #464646;
`

const ModalActions = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

const Modall = styled.div`
    position: fixed;
    z-index: 110;
    background: white;
    border-radius: 10px;
    top: 25vh;
    left: 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 40rem;
    margin-left: 18rem;
`

const Headerr = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    background: #0536a1;
`
const HeaderTitle = styled.h1`
    margin: 0;
    color: white;
    font-size: 1.5rem;
`

const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 90;
    cursor: pointer;
`
const CancelButton = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    background: #a9a9a9;
    color: white;
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    margin: 0 0.5rem;
    color: #00329e;
    background: transparent;
    border: none;
    box-shadow: none;
    &:hover,
    &:active {
    background: #aec6f8;
  }
`
const AddButton = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    background: #00329e;
    border: #00329e;
    color: white;
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    margin: 0 0.5rem;

    &:hover,
    &:active {
    background: #f67722;
    border-color: #f67722}
`