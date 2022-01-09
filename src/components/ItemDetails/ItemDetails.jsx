import React from 'react'

import './ItemDetails.css'

const ItemDetails = props => {
  const {hide, item} = props;

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

  return (
    <>
    <div className='item-details' onClick={hide}/>
    <div className='item-details-window'>
      <h3>{item.title}</h3>
      <div className='item-details-content'>
        <h4>Szczegóły:</h4>
        <ul>
          <li>Autor: {item.author}</li>
          <li>Rok wydania: {item.yearOfRelease}</li>
          <li>Wydawnictwo: {item.publishingHouse}</li>
          {detailsOfType()}
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