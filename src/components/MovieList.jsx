import React from 'react'
import { useState } from 'react'
import { ConfirmDeleteModal } from './ConfirmDeleteModal';
import styled from 'styled-components';

export const MoviesList = ({deleteMovie, img, title,rating, id}) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const toggleModalHandler = () => {
        setModalVisible((prevState) => !prevState)
    };
    const confirmHandler = () => {
        setModalVisible(false)
    };

  return (
    <>
    {isModalVisible ? (
        <ConfirmDeleteModal 
        onClose={toggleModalHandler}
        onConfirm={confirmHandler}
        deleteMovie={deleteMovie}
        id={id}/>
    ): null}
            <List>
              <DataElement>
                <DataElementImage>
                  <Imagee src={img} alt="nlknml"/>
                </DataElementImage>
                <DataElementInfo>
                  <DataElementInfoTitle>{title}</DataElementInfoTitle>
                  <DataElementInfoRating>{rating}/5</DataElementInfoRating>
      
                  <DeleteButton onClick={toggleModalHandler}>DELETE</DeleteButton>
                </DataElementInfo>
              </DataElement>
        </List>
    </>
  )
}


const List = styled.ul`
    list-style: none;
    width: 40rem;
    max-width: 90%;
    margin: 1rem auto;
    padding: 0;
`

const DataElement = styled.li`
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    display: flex;
`

const DataElementImage = styled.div`
    flex: 1;
    border-radius: 10px 0 0 10px;
    overflow: hidden;
`
const Imagee = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const DataElementInfo = styled.div`
    flex: 2;
    padding: 1rem;
`
const DataElementInfoTitle = styled.h2`
    color: #3e3d3d;
    margin-bottom: 1rem;
`
const DataElementInfoRating = styled.p`
    color: white;
    display: inline;
    background: #f77b29;
    padding: 0.25rem 1rem;
    border-radius: 15px;
    font-size: larger;
`
const DeleteButton = styled.button`
      padding: 0.5rem 1rem;
    color: white;
    border: red;
    background-color: red;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    cursor: pointer;
    font: inherit;
    margin-left: 40px;
    &:hover,
    &:active {
    background: #c52b16;}
`