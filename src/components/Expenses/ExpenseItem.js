import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

import ExpenseDetails from './ExpenseDetails';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

        const [title, setTitle] = useState(props.title);
        const [amount, setAmount] = useState(props.amount);


        const clickHandler = () => {

                //changing the title onclick
                setTitle('Updated !!');
                console.log(title);
                console.log("clicked !!!");

              };

        const expenseClickHandler = () => {

                //changing the expense on click
                setAmount('100$');
                console.log(amount);

              };

        const deleteHandler = (event) =>{

                const expenseToDelt = event.target.parentElement;   
                expenseToDelt.remove();
                console.log("Deleted !!");

        };

    return (
            <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={amount}  LocationOfExpenditure={props.LocationOfExpenditure}   title={title} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={expenseClickHandler}>Change Expense</button>
            <button onClick={deleteHandler}>Delete Expense</button>
            </Card>
    );
  }
  
  export default ExpenseItem;  