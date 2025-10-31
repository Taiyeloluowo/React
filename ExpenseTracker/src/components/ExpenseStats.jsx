function ExpenseStats({ expenses }) {
  const total = expenses.length;
  const paid = expenses.filter(e => e.paid).length;
  const pending = total - paid;

  const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);
  const paidAmount = expenses
    .filter(e => e.paid)
    .reduce((sum, e) => sum + e.amount, 0);
  const pendingAmount = totalAmount - paidAmount;
  
  return (
    <div className="stats">
      <div className="stat-item">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total Expenses</span>
        <small>₦{totalAmount.toLocaleString()}</small>
      </div>
      <div className="stat-item">
        <span className="stat-number">{pending}</span>
        <span className="stat-label">Pending</span>
        <small>₦{pendingAmount.toLocaleString()}</small>
      </div>
      <div className="stat-item">
        <span className="stat-number">{paid}</span>
        <span className="stat-label">Paid</span>
        <small>₦{paidAmount.toLocaleString()}</small>
      </div>
    </div>
  );
}

export default ExpenseStats;