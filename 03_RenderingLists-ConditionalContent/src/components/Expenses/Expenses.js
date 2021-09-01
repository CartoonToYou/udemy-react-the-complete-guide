import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState(2020);

  const selectedFilterHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
  };

  const filterExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +selectedFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        select={selectedFilter}
        onFilterYear={selectedFilterHandler}
      />
      {filterExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
