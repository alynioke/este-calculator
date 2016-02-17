import * as actions from './actions';
import {Record, List} from 'immutable';
import Loan from './loan';

const InitialLoansState = Record({
  currentLoan: new Loan,
  loans: List()
});

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

      //???? setIn is Map's method. But if I put Map as type of state, then i have errors.
      return state.setIn(['currentLoan', name], value);
    }

    case actions.CALCULATE_ADD_LOAN: {
      const {now} = action.payload;
      /* I just wanted to use something from the middleware, hence 'now' function */
      /* It's not really needed here */

      return state
        .update('loans', loans => loans.push(
          state
            .get('currentLoan')
            .set('date', new Date(now())))
        )
        .set('currentLoan', new Loan);
    }
  }

  return state;
}
