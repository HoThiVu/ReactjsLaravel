import logo from './logo.svg';
import './App.css';
import CarList from './pages/CarList';
import AddCar from './pages/AddCar';
// import Search from './pages/Search';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <CarList></CarList>
    {/* <Search></Search> */}
    {/* <AddCar></AddCar> */}
    </>
  );
}

export default App;
