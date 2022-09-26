import React, { useState } from "react";

function AddTransactionForm({ setTransactionsData }) {

 const [state, setState] = useState({
  date: '',
  description: '',
  category: '',
  amount: '',
 });

const handleChange = (e) => {
  e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  setState({...state,[name]: value })
}

const handleSubmit = (e) => {
  e.preventDefault();
  setTransactionsData(transactionsData => [...transactionsData, state]);
  setState({
    date: '', description: '', category: '', amount: '',
  })
}



  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input type="date" name="date" value={ state.date } onChange={ handleChange }/>
          <input type="text" name="description" placeholder="Description" value={ state.description } onChange={ handleChange }/>
          <input type="text" name="category" placeholder="Category" value={ state.category } onChange={ handleChange }/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={ state.amount } onChange={ handleChange }/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
