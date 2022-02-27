import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItem } from '../../../../../actions/itemActions';
import { API_URL } from '../../../../../temp/TempURL';

import './SmallItem.css'

const SmallItem = ({item}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditClick = (event) => {
    event.stopPropagation();
    navigate(`./edit/${item.id}`);
  }
  const handleDeleteClick = (event) => {
    fetch(API_URL + `/item/delete/${item.id}`, {
      method: 'delete',
      headers: new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }),
    }).then(response => response.json(), () => console.error('Item cannot add.'))
    .then(() => dispatch(deleteItem(item.id)));
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