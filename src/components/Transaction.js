import React from "react";
// import React,{useEffect,useState} from "react";
// function Transaction() {
//   const [transactions,setAddTransactions]= useState([]);
//   useEffect(()=>{
//   getTransactions();
//    },[])
//   function getTransactions(){
//     fetch("http://localhost:8001/transactions")
//     .then((response)=>response.json())
//     .then((data)=>{
//       console.log(data)
//       setAddTransactions(data) 
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
// }


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
