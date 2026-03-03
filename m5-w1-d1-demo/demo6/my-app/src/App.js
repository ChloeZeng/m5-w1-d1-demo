import logo from './logo.svg';
import './App.css';

//without reactstrap
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="btn btn-danger"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    
       <button className="btn btn-danger mt-3">
        Danger
      </button>
      </header>
    </div>
  );
}

export default App;
