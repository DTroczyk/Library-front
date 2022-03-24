import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { loguotUser } from '../../actions/userActions';

import './Header.css'

const Header = () => {
  const user = useSelector(store => store.user);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loguotUser());
  }

  const isUserLogged = () => {
    if (user.username) {
      return (
        <>
          <li><Link to='/panel/items'>Panel</Link></li>
          <li><Link to='/' onClick={handleClick}>Wyloguj</Link></li>
        </>
      )
    } else {
      return (
        <>
          <li><Link to='/login'>Logowanie</Link></li>
          <li><Link to='/register'>Rejestracja</Link></li>
        </>
      )
    }
  }

  return (
    <header>
      <div className="header-banner">
        <Link to='/'>Biblioteka</Link>
      </div>
      <nav>
        <ul>
          <li><Link to='/'>Strona Główna</Link></li>
          {isUserLogged()}
        </ul>
      </nav>
    </header>
  )
}

export default Header