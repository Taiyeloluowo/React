import { useState, useEffect } from 'react';

function ExpenseItem({ expense, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(expense.text);
  
  useEffect(() => {
    setEditText(expense.text);
  }, [expense.text]);

  function handleEdit() {
    if (editText.trim() === '') return;
    onEdit(expense.id, editText);
    setIsEditing(false);
  }
  
  return (
    <div className={`expense-item ${expense.paid ? 'paid' : ''}`}>
      <input
        type="checkbox"
        checked={expense.paid}
        onChange={() => onToggle(expense.id)}
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
          autoFocus
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{expense.text}</span>
      )}

      <span className="expense-amount">₦{expense.amount.toLocaleString()}</span>
      
      <button onClick={() => onDelete(expense.id)} className="delete-btn">
        🗑️
      </button>
    </div>
  );
}

export default ExpenseItem;