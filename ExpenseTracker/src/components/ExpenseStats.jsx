function Stats({ expenses }) {
  const total = expenses.length;
  const paid = expenses.filter(expense => expense.paid).length;
  const pending = total - paid;
  
  return (
    <div className="stats">
      <div className="stat-item">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{pending}</span>
        <span className="stat-label">Pending</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{paid}</span>
        <span className="stat-label">Paid</span>
      </div>
    </div>
  );
}

export default Stats;