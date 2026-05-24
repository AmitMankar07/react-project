import "./ExpenseItem.css"
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function ExpenseItem(props) {
  // Use the index from getMonth() to pull the string from the array
  const month = months[props.date.getMonth()]; 
  const year = props.date.getFullYear();
  const date = ('0' + props.date.getDate()).slice(-2);

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;