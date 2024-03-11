import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses  =[
    {
      id: 'e1',
      title: 'Food',
      amount: 'Rs.10',
      date: new Date(2020, 7, 14),
      LocationOfExpenditure : "Nashik",
    },
    {
      id: 'e2',
      title: 'Petrol',
      amount: 'Rs.100',
      date: new Date(2021, 2, 28),
      LocationOfExpenditure : "Nashik",
    },
    {
      id: 'e3',
      title: 'Movies',
      amount: 'Rs.200',
      date: new Date(2021, 5, 12),
      LocationOfExpenditure : "Nashik",
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <h2 className='expense-item__description h2'>Expense Items</h2>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
