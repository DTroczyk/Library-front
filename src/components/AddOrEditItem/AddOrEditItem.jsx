import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addItem, editItem } from '../../actions/itemActions';

import "./AddOrEditItem.css"

const AddOrEditItem = ({item}) => {
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputDuration, setInputDuration] = useState("");
  const [inputIsToLet, setInputIsToLet] = useState(false);
  const [inputIsVisible, setInputIsVisible] = useState(true);
  const [inputItemType, setInputItemType] = useState("")
  const [inputLanguage, setInputLanguage] = useState("Polski");
  const [inputMaxPlayers, setInputMaxPlayers] = useState(2);
  const [inputMinPlayers, setInputMinPlayers] = useState(1);
  const [inputMinAge, setInputMinAge] = useState(5);
  const [inputPages, setInputPages] = useState(1);
  const [inputPubHouse, setInputPubHouse] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputYear, setInputYear] = useState(2000);

  const dispatch = useDispatch();
  
  const handleChangeAuthor = event => setInputAuthor(event.target.value);
  const handleChangeDescription = event => setInputDescription(event.target.value);
  const handleChangeDuration = event => setInputDuration(event.target.value);
  const handleChangeIsToLet = event => setInputIsToLet(event.target.checked);
  const handleChangeIsVisible = event => setInputIsVisible(event.target.checked);
  const handleChangeItemType = event => setInputItemType(event.target.value);
  const handleChangeLanguage = event => setInputLanguage(event.target.value);
  const handleChangeMaxPlayers = event => setInputMaxPlayers(event.target.value);
  const handleChangeMinPlayers = event => setInputMinPlayers(event.target.value);
  const handleChangeMinAge = event => setInputMinAge(event.target.value);
  const handleChangePages = event => setInputPages(event.target.value);
  const handleChangePubHouse = event => setInputPubHouse(event.target.value);
  const handleChangeTitle = event => setInputTitle(event.target.value);
  const handleChangeYear = event => setInputYear(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();
    
    const itemObject = {
      author: inputAuthor,
      title: inputTitle,
      description: inputDescription,
      photo: "none",
      language: inputLanguage,
      year: inputYear,
      publishingHouse: inputPubHouse,
      type: inputItemType,
      owner: "Tymczasowy Gość",
      ownerId: 109,
      shelfId: 101,
      isPrivate: inputIsVisible,
      pages: inputPages,
      minPlayers: inputMinPlayers,
      maxPlayers: inputMaxPlayers,
      length: inputDuration,
      minAge: inputMinAge,
      isToLet: inputIsToLet
    }

    // item.id ? dispatch(addItem(itemObject)) : dispatch(editItem(itemObject));
    dispatch(addItem(itemObject))
  }
  
  const currentYear = new Date().getFullYear();

  const itemTypeValues = () => {
    if (inputItemType === "Książka") {
      return (
        <>
          <label>Ilość stron:</label>
          <input type="number" min={1} max={9999} value={inputPages} onChange={handleChangePages}/>
          <br />
        </>
      )
    } else if (inputItemType === "Gra planszowa") {
      return (
        <>
          <label>Minimum graczy:</label>
          <input type="number" min={1} value={inputMinPlayers} max={inputMaxPlayers} onChange={handleChangeMinPlayers}/>
          <br />
          <label>Maksimum graczy:</label>
          <input type="number" min={inputMinPlayers} value={inputMaxPlayers} max={99} onChange={handleChangeMaxPlayers}/>
          <br />
          <label>Minimalny wiek:</label>
          <input type="number" min={1} value={inputMinAge} onChange={handleChangeMinAge}/>
          <br />
          <label>Czas trwania gry:</label>
          <input type="text" placeholder='np. 1h 25min' value={inputDuration} onChange={handleChangeDuration}/>
          <br />
        </>
      )
    }
  }

  return (
    <div className='addoredititem'>
      <h2>Dodaj nowy przedmiot</h2>
      <form className='addoredit-form' onSubmit={handleOnSubmit}>
        <label>Typ przedmiotu:</label>
        <select value={inputItemType} onChange={handleChangeItemType}>
          <option hidden></option>
          <option name="Book">Książka</option>
          <option name="BoardGame">Gra planszowa</option>
        </select>
        <br />
        <label>Tytuł:</label>
        <input type="text" value={inputTitle} onChange={handleChangeTitle}/>
        <br />
        <label>Autor:</label>
        <input type="text" value={inputAuthor} onChange={handleChangeAuthor}/>
        <br />
        <label>Rok wydania:</label>
        <input type="number" min="1900" max={currentYear} value={inputYear} onChange={handleChangeYear}/>
        <br />
        <label>Wydawnictwo:</label>
        <input type="text" value={inputPubHouse} onChange={handleChangePubHouse}/>
        <br />
        <label>Język:</label>
        <input type="text" value={inputLanguage} onChange={handleChangeLanguage}/>
        <br />
        {itemTypeValues()}
        <label>Widoczna dla innych?:</label>
        <input type="checkbox" checked={inputIsVisible} onChange={handleChangeIsVisible}/> Tak
        <br />
        <label>Do wypożyczenia?:</label>
        <input type="checkbox" checked={inputIsToLet} onChange={handleChangeIsToLet}/> Tak
        <br />
        <label>Opis:</label>
        <textarea 
          rows="10" 
          placeholder='Opis ksiązki/gry lub kilka słów o niej.' 
          value={inputDescription} 
          onChange={handleChangeDescription}
        />
        <br />
        <button type='submit'>Dodaj</button>
      </form>
    </div>
  )
}

export default AddOrEditItem;