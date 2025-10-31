import { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [expenseText, setExpenseText] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    if (expenseText.trim() === '' || expenseAmount === '') return;
    
    onAddExpense(expenseText, parseFloat(expenseAmount));
    setExpenseText('');
    setExpenseAmount('');
  }
  
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense description..."
        value={expenseText}
        onChange={(e) => setExpenseText(e.target.value)}
      />
      <input 
      type="number"
      placeholder="Amount"
      value={expenseAmount}
      onChange={(e) => setExpenseAmount(e.target.value)}
      min="0"
      step="0.01"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;