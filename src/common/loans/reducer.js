import * as actions from './actions';
import {Record, Map} from 'immutable';
import Loan from './loan';
import {calculateReturnAmount} from './consts';

const InitialLoansState = Record({
  currentLoan: new Loan,
  loans: Map()
});

const initialState = new InitialLoansState;

export default function loansReducer(state = initialState, action) {

/* state is coming from the server by default in this app, */
/* so even tho we dont need to acquire any data from it, we still have to process it */
  if (!(state instanceof InitialLoansState)) {
    return initialState.merge(state);
  }

  switch (action.type) {
    case actions.SET_VALUE: {
      const {name, value} = action.payload;
      let currentLoan = state.currentLoan.toJSON();
      currentLoan[name] = value;
      const {amount, days, interest} = currentLoan;

      return state
        .setIn(['currentLoan', name], value)
        .setIn(['currentLoan', 'returnAmount'], calculateReturnAmount(amount, days, interest));
    }

    case actions.ADD_LOAN: {
      const {now, getUid} = action.payload;
      const uid = getUid();
      /* I just wanted to use something from the middleware, hence 'now' function */
      /* It's not really needed here */

      return state
        .update('loans', loans => loans.set(
            uid,
            state
              .get('currentLoan')
              .set('date', new Date(now()))
              .set('id', uid)
            )
        )
        .set('currentLoan', new Loan);
    }

    case actions.EXTEND_LOAN: {
      const {id} = action.payload;

      return state
        .update('loans', loans => loans.update(id, loan => {
          const newInterest = loan.get('interest') * 2;
          const newDate = new Date(loan.get('date').setDate(loan.get('date').getDate() + 7));
          const newReturnAmount = calculateReturnAmount(loan.get('amount'), 8, newInterest);
          const newDays = loan.get('days') + 7;

          return loan
            .set('days', newDays)
            .set('date', newDate)
            .set('interest', newInterest)
            .set('returnAmount', newReturnAmount);
        }));
    }

    case actions.DELETE_LOAN: {
      const {id} = action.payload;

      return state
        .update('loans', () => state
            .get('loans')
            .delete(id));
    }
  }

  return state;
}
