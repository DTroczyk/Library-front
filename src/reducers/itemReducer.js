import {ITEM_ADD, ITEM_EDIT, ITEM_DELETE, ITEMS_SET } from '../actions/itemActions'

export const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ITEM_ADD:
      return [...state, action.payload];
    case ITEM_EDIT:
      console.log(action.payload.item);
      return state.map(currentStateElement => {
        if (currentStateElement.id !== action.payload.item.id) {
          return currentStateElement;
        }

        return (action.payload.item);
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