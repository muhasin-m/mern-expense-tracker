import Balance from "./components/Balance";
import Heder from "./components/Heder";
import IncomeExpenses from "./components/IncomeExpenses";
import "./App.css";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Heder />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
