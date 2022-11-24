import PropTypes from "prop-types";

export const clickHandler = (state, setState) => {
  setState("Updated");
  console.log(state);
};
clickHandler.PropTypes = {
  state: PropTypes.func.isRequired,
  setState: PropTypes.func,
};

export const changeHandler = (setUserInput, newKey) => {
  setUserInput((preState) => {
    return {
      ...preState,
      ...newKey,
    };
  });
};

export const submitHandler = (
  event,
  userInput,
  setUserInput,
  setDefault,
  onSaveExpenseData
) => {
  event.preventDefault();
  const newExpense = {
    title: userInput.enteredTitle,
    amount: +userInput.enteredAmount,
    date: new Date(userInput.enteredDate),
  };

  onsaveExpenseDataHandler(newExpense, onSaveExpenseData);
  setUserInput({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  setDefault(false);
};

export const onsaveExpenseDataHandler = (enteredExpenseData, onAddExpense) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString(),
  };

  onAddExpense(expenseData);
};

export const addExpenseHandler = (expense) => {
  console.log("In App.js");
  console.log(expense);
  alert("done!!");
};
