import React, { useState } from "react";
import "./ExpenseForm.css";
import {
  changeHandler,
  submitHandler,
} from "../EventHandlerFunctions/EventHandlerFunctions";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  return (
    <>
      <form
        onSubmit={(event) => {
          submitHandler(
            event,
            userInput,
            setUserInput,
            props.onDefault,
            props.onSaveExpenseData
          );
        }}
      >
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={(event) => {
                changeHandler(setUserInput, {
                  enteredTitle: event.target.value,
                });
              }}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={userInput.enteredAmount}
              min="0.01"
              step="0.01"
              onChange={(event) => {
                changeHandler(setUserInput, {
                  enteredAmount: event.target.value,
                });
              }}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={userInput.enteredDate}
              onChange={(event) => {
                changeHandler(setUserInput, {
                  enteredDate: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
