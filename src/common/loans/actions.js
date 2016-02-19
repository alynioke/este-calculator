export const CALCULATE_SET_VALUE = 'CALCULATE_SET_VALUE';
export const CALCULATE_ADD_LOAN = 'CALCULATE_ADD_LOAN';
export const CALCULATE_EXTEND_LOAN = 'CALCULATE_EXTEND_LOAN';

export function calculateSetValue(name, value) {
  return {
    type: CALCULATE_SET_VALUE,
    payload: {name, value}
  };
}

export function calculateAddLoan() {
  return ({now, getUid}) => {
    return {
      type: CALCULATE_ADD_LOAN,
      payload: {now, getUid}
    };
  };
}

export function calculateExtendLoan(id) {
  return {
    type: CALCULATE_EXTEND_LOAN,
    payload: {id}
  };
}
