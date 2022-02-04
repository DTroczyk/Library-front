import {ITEM_ADD, ITEM_EDIT, ITEM_DELETE, ITEMS_SET } from '../actions/itemActions'

import { tempData } from '../temp/TempData';

export const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ITEM_ADD:
      return [...state, action.payload];
    case ITEM_EDIT:
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
    case ITEM_DELETE:
      return state.filter(currentStateElement => 
        currentStateElement.id !== action.payload.id);
    case ITEMS_SET:
      return action.payload.items;

    default:
      console.warn(`Don't have the action: ${action.type} in itemReducer`);
      return state;
  }
}