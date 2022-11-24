import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpesesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterofYear, setFilterofYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterofYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterofYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterofYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpenses} />
        <ExpesesList items={filteredExpenses} />
      </Card>
    </>
  );
};
export default Expenses;
