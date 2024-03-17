import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

import ExpenseDetails from './ExpenseDetails';

import './ExpenseItem.css';

const ExpenseItem = (props) => {


        const clickHandler = () => {
                console.log("clicked !!!");
              };

        const deleteHandler = (event) =>{

                const expenseToDelt = event.target.parentElement;
                expenseToDelt.remove();
                console.log("Deleted !!");

        };

    return (
            <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   title={props.title} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteHandler}>Delete Expense</button>
            </Card>
    );
  }
  
  export default ExpenseItem;  