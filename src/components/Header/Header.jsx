import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <header>
      <div id="banner">
        <Link to='/'>Biblioteka</Link>
      </div>
      <nav>
          <div><Link to='/'>Strona Główna</Link></div>
          <div><Link to='/login'>Logowanie</Link></div>
          <div><Link to='/register'>Rejestracja</Link></div>
      </nav>
    </header>
  )
}

export default Header