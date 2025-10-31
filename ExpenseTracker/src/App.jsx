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

  // Add expense
  function addExpense(text, amount) {
    const newExpense = {
      id: Date.now(),
      text: text,
      amount: amount,
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
  function editExpense(id, newText) {
    setExpenses(expenses.map(expense =>
      expense.id === id ? { ...expense, text: newText } : expense
    ));
  }
  
  // Filter expenses
  const filteredExpenses = 
    filter === 'paid'
      ? expenses.filter(e => e.paid)
      : filter === 'pending'
      ? expenses.filter(e => !e.paid)
      : expenses;
  
  return (
    <div className="app">
      <Header />
      <AddExpenseForm onAddExpense={addExpense} />
      <div className="filter-buttons">
        <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'pending' ? 'active' : ''}onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button
          className={filter ==='paid' ? 'active' : ''}
          onClick={() => setFilter('paid')}
          >
            Paid
          </button>
      </div>

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