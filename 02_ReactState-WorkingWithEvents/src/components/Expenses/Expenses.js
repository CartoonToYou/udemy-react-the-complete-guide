import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const selectDropdownFilter = (selectedYear) => {
    setSelectedFilter(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onSelectDropdown={selectDropdownFilter}
      />
      {props.expenses.map((expense, idx) => (
        <ExpenseItem
          key={idx}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
