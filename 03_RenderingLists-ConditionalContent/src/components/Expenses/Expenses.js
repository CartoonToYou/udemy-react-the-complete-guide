import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
};

export default Expenses;
