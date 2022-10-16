import './App.css';
import IncrementButton from './components/IncrementButton';
import ResetButton from './components/ResetButton';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IncrementButton/>
        <Counter/>
        <ResetButton/>
      </header>
    </div>
  );
}

export default App;
