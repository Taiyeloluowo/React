import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import CategoryFilter from './components/CategoryFilter';
import ExpenseList from './components/ExpenseList';
import ExpenseStats from './components/ExpenseStats';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Add expense with description, amount and category
  function addExpense(description, amount, category) {
    const newExpense = {
      id: Date.now(),
      description,
      amount: parse.float(amount),
      category,
      paid: false,
    };
    setExpenses([...expenses, newExpense]);
  }
  
  // Toggle paid status
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
  function editExpense(id, newDescription) {
    setExpenses(expenses.map(expense =>
      expense.id === id ? { ...expense, description: newDescription } : expense
    ));
  }
  
  // Filter expenses by category
  const filteredExpenses = 
    filter === 'All'
      ? expenses.filter(e => e.paid)
      : filter === 'pending'
      ? expenses.filter(e => !e.paid)
      : expenses;
  
  return (
    <div className="app">
      <Header />
      <AddExpenseForm onAddExpense={addExpense} />
      <CategoryFilter currentFilter={filter} onFilterChange={setFilter} />
      <ExpenseStats expenses={expenses} />
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