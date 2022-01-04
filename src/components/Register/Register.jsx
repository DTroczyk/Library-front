import React from 'react'

import './Register.css'

const Register = () => {
  const [inputEmail, setInputEmail] = React.useState('');
  const [inputEmailRepeat, setInputEmailRepeat] = React.useState('');
  const [inputName, setInputName] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [inputPasswordRepeat, setInputPasswordRepeat] = React.useState('');
  const [inputSurname, setInputSurname] = React.useState('');
  const [inputUsername, setInputUsername] = React.useState('');

  const handleEmailChange = (event) => setInputEmail(event.target.value);
  const handleEmailRepeatChange = (event) => setInputEmailRepeat(event.target.value);
  const handleNameChange = (event) => setInputName(event.target.value);
  const handlePasswordChange = (event) => setInputPassword(event.target.value);
  const handlePasswordRepeatChange = (event) => setInputPasswordRepeat(event.target.value);
  const handleSurnameChange = (event) => setInputSurname(event.target.value);
  const handleUsernameChange = (event) => setInputUsername(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    var isCorrect = true;
    if (inputPassword !== inputPasswordRepeat) {
      alert('Podane hasła różnią się')
      isCorrect = false;
    }
    if (inputEmail !== inputEmailRepeat) {
      alert('Podane emaile różnią się')
      isCorrect = false;
    }
    if (!isCorrect) return;

    alert(`Dane, które zostałyby wysłane:
  Nazwa użytkownika: ${inputUsername}
  Email: ${inputEmail}
  Imię: ${inputName}
  Nazwisko: ${inputSurname}
  Hasło: ${inputPassword}
    
  Ale nie zaimplementowano rejestracji.`);
  }

  return (
    <div className='register'>
      <h2>Zarejestruj się</h2>
      <form onSubmit={handleOnSubmit} className='register-form'>
        <label>Nazwa użytkownika:</label>
        <input type='text' value={inputUsername} onChange={handleUsernameChange}/>
        <br/>
        <label>Email:</label>
        <input type='email' value={inputEmail} onChange={handleEmailChange}/>
        <br/>
        <label>Powtórz email:</label>
        <input type='email' value={inputEmailRepeat} onChange={handleEmailRepeatChange}/>
        <br/>
        <label>Hasło:</label>
        <input type='password' value={inputPassword} onChange={handlePasswordChange}/>
        <br/>
        <label>Powtórz hasło:</label>
        <input type='password' value={inputPasswordRepeat} onChange={handlePasswordRepeatChange}/>
        <br/>
        <label>Imię:</label>
        <input type='text' value={inputName} onChange={handleNameChange}/>
        <br/>
        <label>Nazwisko:</label>
        <input type='text' value={inputSurname} onChange={handleSurnameChange}/>
        <br/>
        <button type='submit'>Zarejestruj</button>
      </form>
    </div>
  )
}

export default Register;