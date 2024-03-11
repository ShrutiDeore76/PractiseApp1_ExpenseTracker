import './ExpenseItem.css';

function ExpenseDetails(props){

return (
    <div className='expense-item__description'>
        <h2 className='expense-item__description'>{props.LocationOfExpenditure}</h2>
        <h2 className='expense-item__description'>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
    </div>
);
}

export default ExpenseDetails;