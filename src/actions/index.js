import * as types from './ActionTypes'

export const startGame = (is_start) => {
  return{
      type:types.START,
      is_start: is_start
  }
}

export const selectPlate = (idx, value, key) => {
  return{
      type:types.SELECT,
      idx:idx,
      value: value,
      key:key
  }
}