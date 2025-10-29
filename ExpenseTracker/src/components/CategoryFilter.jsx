function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-buttons">
      <button 
        className={currentFilter === 'all' ? 'pending' : ''}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button 
        className={currentFilter === 'pending' ? 'pending' : ''}
        onClick={() => onFilterChange('pending')}
      >
        Pending
      </button>
      <button 
        className={currentFilter === 'paid' ? 'pending' : ''}
        onClick={() => onFilterChange('paid')}
      >
        Paid
      </button>
    </div>
  );
}

export default FilterButtons;