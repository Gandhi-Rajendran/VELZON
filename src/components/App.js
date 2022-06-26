import AllTasks from "./AllTasks";
import Cards from "./Cards";
import Header from "./Header";
import "./addtask.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Cards />
        <AllTasks />
      </div>
    </div>
  );
}

export default App;
