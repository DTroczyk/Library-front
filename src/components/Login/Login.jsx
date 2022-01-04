import React, { useState } from 'react'

import './Login.css'

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleForgotPassword = () => {
    alert('Nie zaimplementowano')
  }
  const handleLoginChange = event => setUsernameInput(event.target.value);
  const handleOnSubmit = event => {
    event.preventDefault();

    if (!usernameInput || !passwordInput) {
      console.warn('Login or password field is empty!')
      return
    }

    alert(`Wysyłam dane:
    Login: ${usernameInput}
    Hasło: ${passwordInput}
    Nie zaimplementowano logowania`)
  }
  const handlePasswordChange = event => setPasswordInput(event.target.value);


  return (
    <div className='login'>
      <h2>Zaloguj się</h2>
      <form onSubmit={handleOnSubmit} className='login-form'>
        <label htmlFor="">Login:</label>
        <input type="text" onChange={handleLoginChange} value={usernameInput}/>
        <br/>
        <label htmlFor="">Hasło:</label>
        <input type="password" onChange={handlePasswordChange} value={passwordInput}/>
        <br/>
        <button type='button' onClick={handleForgotPassword}>Przypomnij hasło</button>
        <button type='submit'>Zaloguj</button>
      </form>
    </div>
  )
}

export default Login;