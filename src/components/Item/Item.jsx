import React from 'react'

import './Item.css'

import image from './default-image.jpg'

const BoardGame = {
  author: '',
  authorId: 0,
  id: 0,
  title: '',
  description: '',
  photo: '',
  language: '',
  yearOfRelease: 2010,
  publishingHouse: '',
  type: 'BoardGame',
  owner: '',
  ownerId: 0,
  shelfId: '',
  isPrivate: false,
  
  minPlayers: 1,
  maxPlayers: 5,
  length: '2h',
  minAge: 16,
  
  isBorrowed: false,
  isToLet: true,
  borrower: '',
  borrowerId: 0,
}

const Item = () => {

  const itemType = () => {
    switch (BoardGame.type) {
      case 'BoardGame':
        return 'Gra Planszowa'
      case 'Book':
        return 'Książka'
      default:
        return 'Nieznany typ'
    }
  }

  return (
    <div className='item-preview' title={itemType()}>
      <div className='item-image'><img src={image} alt='Okładka'/></div>
      <div className='item-name'>Terraformacja Marsa</div>
    </div>
  )
}

export default Item;