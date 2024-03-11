import './ExpenseItem.css';

function ExpenseItem(props) {

  const expenseDate = new Date(2024,2,28);
 
    return (
      <div>
        <div>
            <div className='expense-item'>
                <div>{expenseDate.toISOString()}</div>
                <h2 className='expense-item__description'>{props.LocationOfExpenditure}</h2>
                <h2 className='expense-item__description'>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;