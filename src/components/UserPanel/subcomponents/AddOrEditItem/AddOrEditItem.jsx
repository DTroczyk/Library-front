import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { addItem, editItem } from '../../../../actions/itemActions';
import { API_URL } from '../../../../temp/TempURL';

import "./AddOrEditItem.css"

const AddOrEditItem = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState(undefined);
  const user = useSelector(store => store.user);
  const {itemId} = useParams();
  const navigate = useNavigate();

  const [inputAuthor, setInputAuthor] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputDuration, setInputDuration] = useState("");
  const [inputIsToLet, setInputIsToLet] = useState(true);
  const [inputIsVisible, setInputIsVisible] = useState(true);
  const [inputItemType, setInputItemType] = useState("")
  const [inputLanguage, setInputLanguage] = useState("Polski");
  const [inputMaxPlayers, setInputMaxPlayers] = useState(2);
  const [inputMinPlayers, setInputMinPlayers] = useState(1);
  const [inputMinAge, setInputMinAge] = useState(5);
  const [inputPages, setInputPages] = useState(1);
  const [inputPubHouse, setInputPubHouse] = useState("");
  const [inputShelf, setInputShelf] = useState(1);
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
  const handleChangeShelf = event => setInputShelf(event.target.value)
  const handleChangeTitle = event => setInputTitle(event.target.value);
  const handleChangeYear = event => setInputYear(event.target.value);

  const setInputData = (newItem) => {
    const loadedShelfId = user.shelves.find(shelf => shelf.title === newItem.shelf.title);
    
    setInputAuthor(newItem.author);
    setInputDescription(newItem.description);
    setInputDuration(newItem.length);
    setInputIsToLet(newItem.isToLet);
    setInputIsVisible(!newItem.isPrivate);
    setInputItemType(newItem.type);
    setInputLanguage(newItem.language);
    setInputMaxPlayers(newItem.maxPlayers);
    setInputMinPlayers(newItem.minPlayers);
    setInputMinAge(newItem.minAge);
    setInputPages(newItem.pages);
    setInputPubHouse(newItem.publishingHouse);
    setInputShelf(loadedShelfId.id)
    setInputTitle(newItem.title);
    setInputYear(newItem.year);
  }

  useEffect(() => {
    if (itemId) {
      user.shelves.find(shelf => shelf.items.find(shelfItem => {
        if (shelfItem.id === Number(itemId)) {
          setIsLoaded(true);
          setItem(shelfItem);
          setInputData(shelfItem);
          return shelfItem;
        }
      }))
    }
  }, [isLoaded, itemId])

  const shelvesOptions = user.shelves.map(shelf => <option key={shelf.id} name={shelf.id}>{shelf.id}. {shelf.name}</option>)

  const handleOnSubmit = event => {
    event.preventDefault();
    
    const itemObject = {
      author: inputAuthor,
      title: inputTitle,
      description: inputDescription,
      photo: "",
      language: inputLanguage,
      year: Number(inputYear),
      publishingHouse: inputPubHouse,
      type: inputItemType,
      shelfId: Number(inputShelf),
      isPrivate: !inputIsVisible,
      pages: Number(inputPages),
      minPlayers: Number(inputMinPlayers),
      maxPlayers: Number(inputMaxPlayers),
      length: inputDuration,
      minAge: Number(inputMinAge),
      isToLet: inputIsToLet,
      isBorrowed: false,
    }

    
    if (item !== undefined) {
      itemObject.id = item.id;
      fetch(API_URL + `/item/edit/${itemObject.id}`, {
        method: 'PUT',
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(itemObject)
      }).then(response => response.json(), () => console.error('Item cannot edit.'))
      .then(data => dispatch(editItem(data)))
      .then(() => navigate('/panel/items'));
    } else {
      fetch(API_URL + '/item/add', {
        method: 'post',
        headers: new Headers({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(itemObject)
      }).then(response => response.json(), () => console.error('Item cannot add.'))
      .then(data => dispatch(addItem(data)))
      .then(() => navigate('/panel/items'));
    }
  }
  
  const currentYear = new Date().getFullYear();

  const itemTypeValues = () => {
    if (inputItemType === "Book") {
      return (
        <>
          <label>Ilość stron:</label>
          <input type="number" min={1} max={9999} value={inputPages} onChange={handleChangePages}/>
          <br />
        </>
      )
    } else if (inputItemType === "BoardGame") {
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
      <h2>{itemId ? "Edytuj" : "Dodaj nowy"} przedmiot</h2>
      <form className='addoredit-form' onSubmit={handleOnSubmit}>
        <label>Typ przedmiotu:</label>
        <select value={inputItemType} onChange={handleChangeItemType}>
          <option hidden></option>
          <option value="Book">Książka</option>
          <option value="BoardGame">Gra planszowa</option>
        </select>
        <br />
        <label>Tytuł:</label>
        <input type="text" value={inputTitle} onChange={handleChangeTitle}/>
        <br />
        <label>Autor:</label>
        <input type="text" value={inputAuthor} onChange={handleChangeAuthor}/>
        <br />
        <label>Typ przedmiotu:</label>
        <select value={inputShelf} onChange={handleChangeShelf}>
          {shelvesOptions}
        </select>
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
        <button type='submit'>{itemId ? "Edytuj" : "Dodaj"}</button>
      </form>
    </div>
  )
}

export default AddOrEditItem;