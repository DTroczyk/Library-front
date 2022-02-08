export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_DELETE = 'ITEM_DELETE';
export const ITEM_EDIT = 'ITEM_EDIT';
export const ITEMS_SET = 'ITEMS_SET';

export const addItem = ({
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
  isToLet,
}) => ({
  type: ITEM_ADD,
  payload: {
    author,
    id: 0,
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
    isToLet,
  }
})

export const deleteItem = id => ({
  type: ITEM_DELETE,
  payload: {
    id,
  }
})

export const editItem = (item) => ({
  type: ITEM_EDIT,
  payload: {
    item
  }
})

export const setItems = (items) => ({
  type: ITEMS_SET,
  payload: {
    items
  }
})