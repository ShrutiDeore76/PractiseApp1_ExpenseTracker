
import React, { useState } from 'react';

import ExpensesFilter from './components/Expenses/ExpenseFilter';

import NewExpense from "./components/NewExpense/NewExpense";

import ExpensesChart from './components/Expenses/ExpenseChart';


import ExpenseLists from './components/Expenses/ExpenseLists';

import Card from "./components/UI/Card";

const App = () => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Food',
      amount: 10,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure : "Nashik",
    },
    {
      id: 'e2',
      title: 'Petrol',
      amount: 100,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure : "Nashik",
    },
    {
      id: 'e3',
      title: 'Movies',
      amount: 200,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure : "Nashik",
    }
  ]);

  const addExpenseHandler = expense => {
   // console.log('In App.js');
    //console.log(expense);
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense];
    });
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <h2>Let's get started!</h2>
      <h2 className='expense-item__description h2'>Expense Items</h2>
      <li>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseLists items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
}

export default App;
