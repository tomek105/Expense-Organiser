import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const arrayOfExpenses = props.expensesData

  const selectedYearHandler = (expensesFilteredYear) => {
    setSelectedYear(expensesFilteredYear);
  };

  const filteredExpenses = arrayOfExpenses.filter((expense) => {
    return (expense.date.getFullYear().toString() === selectedYear);
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSaveSelectedYear={selectedYearHandler}
        />
        <ExpensesList expensesData={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
