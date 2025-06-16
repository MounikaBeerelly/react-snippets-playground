import './App.css';
import CounterComponent from './components/CounterComponent';
import ToggleComponent from './components/Togglecomponent';

function App() {
  return (
    <div className="App">
      <h1>Toggle Component</h1>
      <ToggleComponent />
      <hr />
      <CounterComponent />
    </div>
  );
}

export default App;
