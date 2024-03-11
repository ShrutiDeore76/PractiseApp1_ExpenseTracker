import './ExpenseItem.css';

function ExpenseItem() {

  const LocationOfExpenditure = "Nashik";
  const expenseDate = new Date(2024,2,28);
  const expenseTitle = 'Food';
  const expenseAmount = 'Rs.10';

    return (
      <div>
        <h2 className='expense-item__description h2'>Expense Items</h2>
        <div>
            <div className='expense-item'>
                <div>{expenseDate.toISOString()}</div>
                <h2 className='expense-item__description'>{LocationOfExpenditure}</h2>
                <h2 className='expense-item__description'>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
            <div className='expense-item'>
                <div>{expenseDate.toISOString()}</div>
                <h2 className='expense-item__description'>{LocationOfExpenditure}</h2>
                <h2 className='expense-item__description'>Petrol</h2>
                <div className='expense-item__price'>Rs.100</div>
            </div>
            <div className='expense-item'>
                <div>{expenseDate.toISOString()}</div>
                <h2 className='expense-item__description'>{LocationOfExpenditure}</h2>
                <h2 className='expense-item__description'>Movies</h2>
                <div className='expense-item__price'>Rs.200</div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;