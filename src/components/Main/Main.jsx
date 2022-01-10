import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Item from '../Item/Item';
import ItemDetails from '../ItemDetails/ItemDetails';

import './Main.css'

import { tempData } from '../../temp/TempData';

const Main = () => {
  const [currentItem, setCurrentItem] = useState({});
  const [data, setData] = useState(tempData);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const {itemId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (itemId) {
      const item = tempData.find(current => current.id == itemId);
      if (item && !item.isPrivate) {
        showDetails(item);
      } else {
        navigate('/');
      }
    } else {
      setCurrentItem({});
      setIsDetailsVisible(false);
    }
  }, [itemId])

  const showDetails = (item) => {
    setCurrentItem(item);
    setIsDetailsVisible(true);
  }
  const details = itemId => navigate(`/item/${itemId}`);
  const hideDetails = () => {
    setIsDetailsVisible(false);
    setCurrentItem({});
    navigate("/");
  }

  const itemList = data.map(current => <Item key={current.id} item={current} details={details}/>)

  return (
    <div>
      {isDetailsVisible ? <ItemDetails item={currentItem} hide={hideDetails}/> : null}
      <h2>Książki i gry planszowe do wypożyczenia:</h2>
      <div className='items-container'>
        {itemList}
      </div>
    </div>
  )
}

export default Main;