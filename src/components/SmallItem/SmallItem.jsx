import React from 'react'

import './SmallItem.css'

const SmallItem = ({item}) => {
  return (
    <div className='small-item'>
      <div className='small-item-id'>
        {item.id}.
      </div>
      <div className='small-item-title'>
        {item.title}
      </div>
      <div className='small-item-buttons'>
        <button>Edytuj</button>
        <button>Usuń</button>
      </div>
    </div>
  )
}

export default SmallItem;