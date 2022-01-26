import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import Item from '../Item/Item';

import './Main.css'

const Main = () => {
  const items = useSelector(store => store.items);
  const navigate = useNavigate();

  const details = itemId => navigate(`/item/${itemId}`);

  const itemList = items.map(current => <Item key={current.id} item={current} details={details}/>)

  return (
    <div>
      <Outlet/>
      <h2>Książki i gry planszowe do wypożyczenia:</h2>
      <div className='items-container'>
        {itemList}
      </div>
    </div>
  )
}

export default Main;