import React from 'react'
import { useSelector } from 'react-redux'
import SmallItem from '../SmallItem/SmallItem';

const UserItems = () => {
  const user = useSelector(store => store.user);
  const items = useSelector(store => store.items).filter(item => item.ownerId === user.username);

  const userItems = items.map(item => <SmallItem key={item.id} item={item}/>)

  return (
    <div>
      {userItems}
    </div>
  )
}

export default UserItems