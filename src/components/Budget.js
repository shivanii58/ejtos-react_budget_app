import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
const BUDGET_MAX_VALUE = 20000;
const Budget = () => {
    const { budget, totalExpenses,currency, dispatch } = useContext(AppContext);
  
    const onChangeBudgetHandler = (event) => {
      const enteredValue = Number(event.target.value);
  
      // check if the entered value is a number
      if (Number.isNaN(enteredValue)) {
        alert('Please enter a valid number.');
        return;
      }
  
      // check if the entered value is an integer number
      if (!Number.isInteger(enteredValue)) {
        alert('Please enter an integer number.');
        return;
      }
  
      if (enteredValue < totalExpenses) {
        alert(
          "You cannot reduce budget value lower than spending " +
            currency +
            totalExpenses
        );
      } else {
        if (enteredValue > BUDGET_MAX_VALUE) {
          alert('The Value cannot exceed ' + BUDGET_MAX_VALUE);
          return;
        }
  
        dispatch({
          type: 'SET_BUDGET',
          payload: enteredValue,
        });
      }
    };
  
    return (

<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
          <input
            required="required"
            type="number"
            id="budget"
            value={budget}
            step="10"
            onChange={onChangeBudgetHandler}
          ></input>
        </div>
    );
  };
  
  export default Budget;