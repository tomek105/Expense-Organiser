import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {
  const [isEditing, setEditingView] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onSaveNewExpenseData(expenseData);
    setEditingView(false);
  };

  const switchToEditingHandler = () => {
    if (isEditing === false) {
      setEditingView(true);
    } else {
      setEditingView(false);
    }
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={switchToEditingHandler} type="button">
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onSwitchView={switchToEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
