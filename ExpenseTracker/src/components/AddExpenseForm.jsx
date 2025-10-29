import { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [expenseText, setExpenseText] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    if (expenseText.trim() === '') return;
    
    onAddExpense(expenseText);
    setExpenseText('');
  }
  
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new expense..."
        value={expenseText}
        onChange={(e) => setExpenseText(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;