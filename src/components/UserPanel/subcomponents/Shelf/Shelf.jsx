import React from 'react'
import SmallItem from '../SmallItem/SmallItem'

import './Shelf.css'

const Shelf = ({shelf}) => {
  const shelfItems = shelf.items.map(item => <SmallItem key={item.id} item={item}/>)

  return (
    <div className='shelf'>
      <div className='shelf-title'>{shelf.id}. {shelf.name}</div>
      <div className='shelf-items'>{shelfItems.length === 0 ? <div>Nic nie ma na tej półce.</div> : shelfItems}</div>
    </div>  
  )
}

export default Shelf;