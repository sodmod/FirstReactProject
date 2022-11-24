import React from "react";
import "./Calender.css";

const Calender = (props) => {
  const expenseDateM = props.calender.toLocaleString("en-US", {
    month: "long",
  });
  const expenseDateY = props.calender.getFullYear();
  const expenseDay = props.calender.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseDateM}</div>
      <div className="expense-date__year">{expenseDateY}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
};
export default Calender;
