import { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
   const [title, setTitle] = useState(props.title);
   const changeTitle = () => {
    setTitle("Updated");
   } 
   return (
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <div>
            <h2>{title}</h2>
            <div>{props.amount}</div>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    </Card>
    );
}

export default ExpenseItem;