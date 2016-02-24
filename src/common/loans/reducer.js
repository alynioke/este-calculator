import * as actions from './actions';
import {Record, List} from 'immutable';
import Loan from './loan';
import RecordFirstLevel from './recordStructure_1';
import {calculateReturnAmount} from './consts';

const InitialLoansState = Record({
  currentLoan: new Loan,
  loans: List(),

  recordFiels: new RecordFirstLevel,
  simpleField: 555
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
      /* I just wanted to use something from the middleware, hence 'now' function */
      /* It's not really needed here */

      return state
        .update('loans', loans => loans.push(
            state
              .get('currentLoan')
              .set('date', new Date(now()))
              .set('id', getUid())
            )
        )
        .set('currentLoan', new Loan);
    }

    case actions.EXTEND_LOAN: {
      const {id} = action.payload;

      return state
        .update('loans', loans => loans.update(id, function(loan) {
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



//
//
// in each reducer create a case, inside of whic send data to some function X,
// which gets initialState, where and value
// function X will be a function of middleware
//
// First - realise this function inside one reducer.
// Then - create a middleware
// 3. Create is in the each reducer and action creator....
