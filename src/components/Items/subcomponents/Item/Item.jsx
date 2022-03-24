import React from 'react'

import './Item.css'

import bookImage from '../../../../assets/default-book-image.png'
import gameImage from '../../../../assets/default-game-image.png'

const Item = props => {
  const {item, details} = props;
  var image;

  const itemType = () => {
    switch (item.type) {
      case 'BoardGame':
        image = gameImage;
        return 'Gra Planszowa'
      case 'Book':
        image = bookImage;
        return 'Książka'
      default:
        return 'Nieznany typ'
    }
  }

  return (
    <div className='item-preview' title={itemType()} onClick={() => details(item.id)}>
      <div className='item-image'><img src={image} alt='Okładka'/></div>
      <div className='item-name'>{item.title}</div>
    </div>
  )
}

export default Item;