import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useItems } from '../../hooks/useApi';

import Item from './subcomponents/Item/Item';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

import './Items.css'

const Items = () => {
  const items = useItems()
  const navigate = useNavigate();

  const details = itemId => navigate(`/item/${itemId}`);

  const itemList = items.isLoading ? <LoadingIndicator/> : items.data.map(current => <Item key={current.id} item={current} details={details}/>)

  return (
    <section className='items'>
      <Outlet/>
      <h2>Książki i gry planszowe do wypożyczenia:</h2>
      <div className='items-container'>
        {itemList}
      </div>
    </section>
  )
}

export default Items;