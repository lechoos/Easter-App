import { date } from './easterDate';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'change-year' :
      return {
        ...state, 
        year: action.year
      }
    case 'change-date' :
      return {
        ...state,
        year: action.date.year,
        month: action.date.month,
        day: action.date.day,
      }
    default :
    throw new Error('Nie ma takiej akcji ' + action.type)
  }
}

export const initialState = {...date}