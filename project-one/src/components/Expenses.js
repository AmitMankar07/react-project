// Write your code here
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) { 
  
  return (
    <div>
      {(props.expenses|| []).map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
  ))}
    </div>
)
}
export default Expenses;
