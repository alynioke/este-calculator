export const SET_VALUE = 'SET_VALUE';
export const ADD_LOAN = 'ADD_LOAN';
export const EXTEND_LOAN = 'EXTEND_LOAN';
export const DELETE_LOAN = 'DELETE_LOAN';
// export const SET_SOMETHING = 'SET_SOMETHING';

export function calculateSetValue(name, value) {
  return {
    type: SET_VALUE,
    payload: {name, value}
  };
}

export function calculateAddLoan() {
  return ({now, getUid}) => {
    return {
      type: ADD_LOAN,
      payload: {now, getUid}
    };
  };
}

export function calculateExtendLoan(id) {
  return {
    type: EXTEND_LOAN,
    payload: {id}
  };
}

export function calculateDeleteLoan(id) {
  return {
    type: DELETE_LOAN,
    payload: {id}
  };
}

// export function setSomething(params) {
//   return {
//     type: SET_SOMETHING,
//     payload: params
//   };
// }
