import logo from './logo.svg';
import './App.css';
import VotingPanel from './Components/VotingPanel';

function App() {
  const message = "React Voting app....."
  return (
    <div className="App">
      <VotingPanel></VotingPanel>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Arriving Soon: {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
