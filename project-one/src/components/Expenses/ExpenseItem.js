// Write your code at relevant places in the code below
import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js"
import Card from '../UI/Card.js'
// import { useState } from "react";

function ExpenseItem(props) {
const [title,setTitle]=useState(props.title);
 function buttonClickHandler(event){
  setTitle('New Title')
 }
  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}></ExpenseDate>
      
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
