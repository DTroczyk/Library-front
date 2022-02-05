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
          <div><Link to='/panel/items'>Panel</Link></div>
          <div><Link to='/' onClick={handleClick}>Wyloguj</Link></div>
        </>
      )
    } else {
      return (
        <>
          <div><Link to='/login'>Logowanie</Link></div>
          <div><Link to='/register'>Rejestracja</Link></div>
        </>
      )
    }
  }

  return (
    <header>
      <div id="banner">
        <Link to='/'>Biblioteka</Link>
      </div>
      <nav>
          <div><Link to='/'>Strona Główna</Link></div>
          {/* <div><Link to='/additem'>Dodaj przedmiot</Link></div> */}
          {isUserLogged()}
      </nav>
    </header>
  )
}

export default Header