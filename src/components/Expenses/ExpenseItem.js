import React, { useState } from "react";
import "./ExpenseItem.css";
import Calender from "./Calender";
import Card from "../UI/Card";
import { clickHandler } from "../EventHandlerFunctions/EventHandlerFunctions";

let expenseAmount = "";
let calender = "";

const ExpenseItem = (props) => {
  const [state, setState] = useState(props.title);

  expenseAmount = props.amount;
  calender = props.date;
  return (
    <Card className="expense-item">
      <Calender calender={calender} />
      <div className="expense-item__description">
        <h2>{state}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button
        onClick={() => {
          clickHandler(state, setState);
        }}
      >
        Change title
      </button>
    </Card>
  );
};
export default ExpenseItem;
