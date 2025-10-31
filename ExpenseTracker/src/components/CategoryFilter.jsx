function CategoryFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-buttons">
      <button 
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button 
        className={currentFilter === 'pending' ? 'active' : ''}
        onClick={() => onFilterChange('pending')}
      >
        Pending
      </button>
      <button 
        className={currentFilter === 'paid' ? 'active' : ''}
        onClick={() => onFilterChange('paid')}
      >
        Paid
      </button>
    </div>
  );
}

export default CategoryFilter;