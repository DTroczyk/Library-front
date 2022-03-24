import React from 'react'
import { Route, Routes } from 'react-router-dom'

import useApi from '../../hooks/useApi';

import AddOrEditItem from '../UserPanel/subcomponents/AddOrEditItem/AddOrEditItem';
import Login from '../Login/Login';
import ItemDetails from '../ItemDetails/ItemDetails';
import Items from '../Items/Items';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import UserPanel from '../UserPanel/UserPanel';
import UserItems from '../UserPanel/subcomponents/UserItems/UserItems';

const Content = () => {
  useApi();

  return (
    <main className='content'>
      <Routes>
        <Route element={<Items/>}  path="/">
          <Route element={<ItemDetails/>} path="/item/:itemId"/>
        </Route>
        <Route element={<Login/>}  path="/login"/>
        <Route element={<Register/>} path="/register"/>
        <Route element={<UserPanel/>} path="panel">
          <Route path="items" element={<UserItems/>}>
            <Route path=":itemId" element={<ItemDetails/>}/>
          </Route>
          <Route path="editItem/:itemId" element={<AddOrEditItem/>}/>
          <Route path="addItem" element={<AddOrEditItem/>}/>
          <Route path="setting" element={<div/>}/>
          <Route path="loans" element={<div/>}/>
        </Route>
        <Route element={<NotFoundPage/>} path="/*"/>
      </Routes>
    </main>
  )
}

export default Content;