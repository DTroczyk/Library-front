export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

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
  type: ADD,
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
  type: DELETE,
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
  type: EDIT,
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