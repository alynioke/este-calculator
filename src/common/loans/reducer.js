import * as actions from './actions';
import {Record, List} from 'immutable';
import Loan from './loan';
import {calculateReturnAmount} from './consts';

const InitialLoansState = Record({
  currentLoan: new Loan,
  loans: List()
});

//@todo: several reducers

const initialState = new InitialLoansState;

export default function loansReducer(state = initialState, action) {

/* state is coming from the server by default in this app, */
/* so even tho we dont need to acquire any data from it, we still have to process it */
  if (!(state instanceof InitialLoansState)) {
    return initialState.merge(state);
  }

  switch (action.type) {
    case actions.CALCULATE_SET_VALUE: {
      const {name, value} = action.payload;
      let currentLoan = state.currentLoan.toJSON();
      currentLoan[name] = value;
      const {amount, days, interest} = currentLoan;

      return state
        .setIn(['currentLoan', name], value)
        .setIn(['currentLoan', 'returnAmount'], calculateReturnAmount(amount, days, interest));
    }

    case actions.CALCULATE_ADD_LOAN: {
      const {now, getUid} = action.payload;
      /* I just wanted to use something from the middleware, hence 'now' function */
      /* It's not really needed here */

      return state
        .update('loans', loans => loans.push(
          state
            .get('currentLoan')
            .set('date', new Date(now())))
            .set('id', getUid())
        )
        .set('currentLoan', new Loan);
    }

    case actions.CALCULATE_EXTEND_LOAN: {
      const {id} = action.payload;

      return state
        .update('loans', loans => loans.update(id, function(loan) {
          //if I take 100 for 1 day withh 100%, it's 200. If I extend, 100% * 2 -> 200%
          //and now i need to pay for 8 days, which is 200% per day = 200*8 + 100 in total.
          const newInterest = loan.get('interest') * 2,
            newDate = new Date(loan.get('date').setDate(loan.get('date').getDate() + 7)),
            newReturnAmount = calculateReturnAmount(loan.get('amount'), 8, newInterest),
            newDays = loan.get('days') + 7;

          return loan
            .set('days', newDays)
            .set('date', newDate)
            .set('interest', newInterest)
            .set('returnAmount', newReturnAmount);
        }));
    }

    //@todo: several reducers 
    //calculate totals
  }

  return state;
}
