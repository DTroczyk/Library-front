import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'

import { setItems } from '../../actions/itemActions';

import AddOrEditItem from '../AddOrEditItem/AddOrEditItem';
import Login from '../Login/Login';
import ItemDetails from '../ItemDetails/ItemDetails';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import UserPanel from '../UserPanel/UserPanel';
import UserItems from '../UserItems/UserItems';
import { API_URL } from '../../temp/TempURL';

const Content = () => {
  var dispatch = useDispatch();

  useEffect(() => {
    fetch(API_URL + '/item')
      .then(response => response.json())
      .then(data => dispatch(setItems(data)));

    if (localStorage.getItem('token') != null) {
      console.log("User is logged in.")
    }
  }, [])

  return (
    <main>
      <Routes>
        <Route element={<Main/>}  path="/">
          <Route element={<ItemDetails/>} path="/item/:itemId"/>
        </Route>
        <Route element={<Login/>}  path="/login"/>
        <Route element={<Register/>} path="/register"/>
        <Route element={<AddOrEditItem/>} path="/additem"/>
        <Route element={<UserPanel/>} path="panel">
          <Route path="items" element={<UserItems/>}/>
          <Route path="setting" element={<Register/>}/>
          <Route path="loans" element={<AddOrEditItem/>}/>
        </Route>
        <Route element={<NotFoundPage/>} path="/*"/>
      </Routes>
    </main>
  )
}

export default Content;