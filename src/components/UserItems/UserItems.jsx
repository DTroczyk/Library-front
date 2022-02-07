import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Shelf from '../Shelf/Shelf';

const UserItems = () => {
  const user = useSelector(store => store.user);
  const shelves = user.shelves;
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    if (shelves) {
      setUserItems(shelves.map(shelf => <Shelf key={shelf.id} shelf={shelf}/>));
    }
  }, [user])

  return (
    <div>
      {userItems}
      <Outlet/>
    </div>
  )
}

export default UserItems