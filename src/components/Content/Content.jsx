import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../Login/Login';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';

const Content = () => {
  return (
    <main>
      <Routes>
        <Route element={<Main/>}  path="/"/>
        <Route element={<Login/>}  path="/login"/>
        <Route element={<Register/>} path="/register"/>
        <Route element={<NotFoundPage/>} path="/*"/>
      </Routes>
    </main>
  )
}

export default Content;