import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import './UserPanel.css'

const UserPanel = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    } else {
      navigate('items');
    }
  }, []);

  return (
    <section className='panel'>
      <div className='panel-menu'>
        <div><NavLink to="/panel/items">Przedmioty</NavLink></div>
        <div><NavLink to="/panel/addShelf">Dodaj półkę</NavLink></div>
        <div><NavLink to="/panel/addItem">Dodaj przedmiot</NavLink></div>
        <div><NavLink to="/panel/loans">Zapytania</NavLink></div>
        <div><NavLink to="/panel/setting">Ustawienia</NavLink></div>
      </div>
      <div className='panel-content'>
        <Outlet/>
      </div>
    </section>
  )
}

export default UserPanel