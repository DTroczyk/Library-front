import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import useApi from '../../hooks/useApi'

import './UserPanel.css'

const UserPanel = () => {
  const navigate = useNavigate()
  const data = useApi();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    } else {
      navigate('items');
    }
  }, []);

  return (
    data.isLoading ? "Ładowanie ..." :
    <div className='panel'>
      <div className='panel-menu'>
        <div><NavLink to="/panel/items">Przedmioty</NavLink></div>
        <div><NavLink to="/panel/loans">Zapytania</NavLink></div>
        <div><NavLink to="/panel/setting">Ustawienia</NavLink></div>
      </div>
      <div className='panel-content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default UserPanel