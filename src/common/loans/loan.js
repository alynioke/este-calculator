import {Record} from 'immutable';

const Loan = Record({
  amount: null,
  days: null,
  interest: null,
  iban: null,
  date: null,
  returnAmount: null
});

export default Loan;
