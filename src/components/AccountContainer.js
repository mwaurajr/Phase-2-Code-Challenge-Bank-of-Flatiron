import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactionsData, setTransactionsData] = React.useState([])

  // console.log('transactionsData', transactionsData);

  return (
    <div>
      <Search />
      <AddTransactionForm setTransactionsData={setTransactionsData}/>
      <TransactionsList transactionsData={transactionsData}/>
    </div>
  );
}

export default AccountContainer;
