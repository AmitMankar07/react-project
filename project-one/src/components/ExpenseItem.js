// Write your code at relevant places in the code below:

import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>15 August 2023</div>
      <div>
      <div className='expense-item__description'>
        <div className='expense-item__location'>Location</div>
        <div>Delhi</div>
      <div className='expense-item__price'>
        <h2>Book</h2>
          <div>$10</div>
        
        </div>
      </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
