import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import './ItemDetails.css'

const ItemDetails = () => {
  const {itemId} = useParams();
  const publicItems = useSelector(store => store.items);
  const userShelves = useSelector(store => store.user.shelves);
  const [item, setItem] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    var foundItem = publicItems.find(obj => obj.id === Number(itemId));
    if (foundItem === undefined) {
      var shelf = userShelves.find(shelf => 
        shelf.items.find(item => {
          if (item.id === Number(itemId)) {
            foundItem = item
            return item;
          };
        })
      );
      foundItem.owner = shelf.owner;
    }
    if (foundItem === undefined) navigate('../.');
    else {
      setItem(foundItem);
      if (!isLoaded) setIsLoaded(true);
    }
  }, [isLoaded])

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
  const handleClick = () => navigate('../.');

  return (
    <>
    <div className='item-details' onClick={handleClick}/>
    <div className='item-details-window'>
    <div className='item-details-close' onClick={handleClick}>X</div>
      {isLoaded && 
      <>
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
      </>}
    </div>
    </>
  )
}

export default ItemDetails;