export const ITEM_ADD = 'ADD';
export const ITEM_DELETE = 'DELETE';
export const ITEM_EDIT = 'EDIT';

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

export const editItem = ({
  author,
  id,
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
  type: ITEM_EDIT,
  payload: {
    author,
    id,
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