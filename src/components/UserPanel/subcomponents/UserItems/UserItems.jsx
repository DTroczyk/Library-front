import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useUser } from '../../../../hooks/useApi';
import LoadingIndicator from '../../../LoadingIndicator/LoadingIndicator';
import Shelf from '../Shelf/Shelf';

const UserItems = () => {
  const user = useUser();
  const shelves = user.isLoading ? [] : user.data.shelves;
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    if (shelves) {
      setUserItems(shelves.map(shelf => <Shelf key={shelf.id} shelf={shelf}/>));
    }
  }, [setUserItems, user.isLoading])

  return (
    <div>
      {user.isLoading ? <LoadingIndicator/> : userItems}
      <Outlet/>
    </div>
  )
}

export default UserItems