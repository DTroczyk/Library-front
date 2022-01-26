import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import './ItemDetails.css'

const ItemDetails = () => {
  const {itemId} = useParams();
  const item = useSelector(store => store.items).find(obj => obj.id === Number(itemId));
  const navigate = useNavigate();

  const detailsOfType = () => {
    if (item.type === "Book") {
      return (
        <li>Liczba stron: {item.pages}</li>
      )
    }
    else if (item.type === "BoardGame") {
      return (
        <>
          <li>Minimalny wiek: {item.minAge}</li>
          <li>Liczba graczy: {item.minPlayers} - {item.maxPlayers}</li>
          <li>Długość gry: {item.length}</li>
        </>
      )
    }
  }
  const handleClick = () => navigate('/');

  return (
    <>
    <div className='item-details' onClick={handleClick}/>
    <div className='item-details-window'>
    <div className='item-details-close' onClick={handleClick}>X</div>
      <h3 className='item-details-title'>{item.title}</h3>
      <div>Autor: {item.author}</div>
      <div className='item-details-content'>
        <h4>Szczegóły:</h4>
        <ul>
          <li>Rok wydania: {item.year}</li>
          <li>Wydawnictwo: {item.publishingHouse}</li>
          {detailsOfType()}
          <li>Język: {item.language}</li>
        </ul>
        <h4>Opis:</h4>
        {item.description}
        <h4>Właściciel: {item.owner}</h4>
      </div>
    </div>
    </>
  )
}

export default ItemDetails;