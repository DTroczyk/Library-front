import React from 'react'
import { useNavigate } from 'react-router-dom';

import './SmallItem.css'

const SmallItem = ({item}) => {
  const navigate = useNavigate();

  const handleEditClick = (event) => {
    event.stopPropagation();
    navigate(`./edit/${item.id}`);
  }
  const handleDeleteClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div className='small-item' onClick={() => navigate(`${item.id}`)}>
      <div className='small-item-id'>
        {item.id}.
      </div>
      <div className='small-item-title'>
        {item.title}
      </div>
      <div className='small-item-buttons'>
        <button onClick={(event) => handleEditClick(event)}>Edytuj</button>
        <button onClick={(event) => handleDeleteClick(event)}>Usuń</button>
      </div>
    </div>
  )
}

export default SmallItem;