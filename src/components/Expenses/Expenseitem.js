import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from '../UI/Card';
import React from "react";

function Expenseitem(props) { 

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default Expenseitem;
