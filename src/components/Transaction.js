import React from "react";




function Transaction({ transactionsData }) {
  // console.log("TansactionsData", transactionsData);

  const data = transactionsData.map((transaction, index) => {
    return (
      <tr key={index}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
    );
  });

  return data;
}

export default Transaction;
