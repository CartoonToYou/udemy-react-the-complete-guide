import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense, idx) => (
        <ExpenseItem
          key={idx}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;