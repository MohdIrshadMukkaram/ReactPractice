function ExpenseDate(props) {
    const date = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div>
            <p>{date}</p>
            <p>{day}</p>
            <p>{year}</p>
        </div>
    );
}

export default ExpenseDate