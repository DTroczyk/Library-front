import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';

import Item from '../Item/Item';

import './Main.css'

const Main = () => {
  const data = useApi()
  const navigate = useNavigate();

  const details = itemId => navigate(`/item/${itemId}`);

  const itemList = data.isLoading ? "Ładowanie ...": data.data.map(current => <Item key={current.id} item={current} details={details}/>)

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