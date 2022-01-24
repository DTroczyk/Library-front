import {ADD, EDIT, DELETE } from '../actions/itemActions'

import { tempData } from '../temp/TempData';

export const itemReducer = (state = tempData, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return state.map(currentStateElement => {
        if (currentStateElement.id !== action.payload.id) {
          return currentStateElement;
        }

        const {
          author,
          title,
          description,
          photo,
          language,
          year,
          publishingHouse,
          type,
          owner,
          ownerId,
          shelfId,
          isPrivate,
          pages,
          minPlayers,
          maxPlayers,
          length,
          minAge,
          isToLet
        } = action.payload;

        return ({
          author,
          id: currentStateElement.id,
          title,
          description,
          photo,
          language,
          year,
          publishingHouse,
          type,
          owner,
          ownerId,
          shelfId,
          isPrivate,
          pages,
          minPlayers,
          maxPlayers,
          length,
          minAge,
          isToLet
        })
      })
    case DELETE:
      return state.filter(currentStateElement => 
        currentStateElement.id !== action.payload.id);

    default:
      console.warn(`Don't have the action: ${action.type}`);
      return state;
  }
}