import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onToggle, onDelete, onEdit }) {
  if (expenses.length === 0) {
    return <p className="empty-message">No expenses to show. Add one to get started!</p>;
  }
  
  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          task={expense}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ExpenseList;