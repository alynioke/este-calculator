export const CALCULATE_SET_VALUE = 'CALCULATE_SET_VALUE';
export const CALCULATE_ADD_LOAN = 'CALCULATE_ADD_LOAN';
export const CALCULATE_EXTEND_LOAN = 'CALCULATE_EXTEND_LOAN';
export const CALCULATE_DELETE_LOAN = 'CALCULATE_DELETE_LOAN';

export function calculateSetValue(name, value) {
  return {
    type: CALCULATE_SET_VALUE,
    payload: {name, value}
  };
}

export function calculateAddLoan() {
  return ({now}) => {
    return {
      type: CALCULATE_ADD_LOAN,
      payload: {now}
    };
  };
}

export function calculateExtendLoan(id) {
  return {
    type: CALCULATE_EXTEND_LOAN,
    payload: {id}
  };
}

export function calculateDeleteLoan(id) {
  return {
    type: CALCULATE_DELETE_LOAN,
    payload: {id}
  };
}

//
// export function setSomething(somewhere, something, value) {
//   return {
//     type: CALCULATE_EXTEND_LOAN,
//     somewhere,
//     something,
//     value
//   };
// }


// setSomething('loans', ['cureentLoan','amount'], 10)
//
// setSomething('autn', ['fomrdisabled'], 10)
