import { useState } from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import FilterButtons from './components/CategoryFilter';
import ExpenseList from './components/ExpenseList';
import Stats from './components/ExpenseStats';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Transport & Entertainment', paid: false },
    { id: 2, amount: 'Utilities', paid: false },
    { id: 3, category: 'Food and Groceries', paid: true }
  ]);
  
  const [filter, setFilter] = useState('all');
  
  // Add new expense
  function addExpense(text) {
    const newExpense = {
      id: Date.now(),
      text: text,
      paid: false
    };
    setExpenses([...expenses, newExpense]);
  }
  
  // Toggle expense completion
  function toggleExpense(id) {
    setExpenses(expenses.map(expense =>
      expense.id === id ? { ...expense, paid: !expense.paid } : expense
    ));
  }
  
  // Delete expense
  function deleteExpense(id) {
    setExpenses(expenses.filter(expense => expense.id !== id));
  }
  
  // Edit expense
  function editExpense(id, newText) {
    setExpenses(expenses.map(expense =>
      expense.id === id ? { ...expense, text: newText } : expense
    ));
  }
  
  // Filter expenses
  const filteredExpenses = expenses.filter(expense => {
    if (filter === 'pending') return !expense.paid;
    if (filter === 'paid') return expense.paid;
    return true; // 'all'
  });
  
  return (
    <div className="app">
      <Header />
      <AddExpenseForm onAddExpense={addExpense} />
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <Stats expenses={expenses} />
      <ExpenseList 
        expenses={filteredExpenses}
        onToggle={toggleExpense}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
    </div>
  );
}

export default App;