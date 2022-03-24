import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../actions/userActions';

import { API_URL } from '../../temp/TempURL';

import './Login.css'

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token') !== null) navigate('/panel/items');
  }, [])

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

    var url = API_URL + `/login?login=${usernameInput}&password=${passwordInput}`;

    fetch(url)
      .then(response => {
          if (response.status !== 200) {
            throw new Error();
          }
          return response.json();
      }).then(data => {
        var token = data.token;
        localStorage.setItem('token', token);
        navigate('/panel');
      })
      .catch(er => console.log("Access Denied"));
  }
  const handlePasswordChange = event => setPasswordInput(event.target.value);


  return (
    <section className='login'>
      <h2>Zaloguj się</h2>
      <form onSubmit={handleOnSubmit} className='login-form'>
        <label>Login:
          <input type="text" onChange={handleLoginChange} value={usernameInput}/>
        </label>
        <label>Hasło:
          <input type="password" onChange={handlePasswordChange} value={passwordInput}/>
        </label>
        <div className='login-form-buttons'>
          <button type='button' onClick={handleForgotPassword}>Przypomnij hasło</button>
          <button type='submit'>Zaloguj</button>
        </div>
      </form>
    </section>
  )
}

export default Login;