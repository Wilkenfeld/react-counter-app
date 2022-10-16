import './App.css';
import IncrementButton from './components/IncrementButton';
import ResetButton from './components/ResetButton';
import Counter from './components/Counter';
import { getQuote } from './api/chuckNorris';
import TextElement from './components/TextElement';
import React from 'react';

class App extends React.Component {
  state = { quote: '' }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div onClick={this.quoteHandler}>
            <IncrementButton />
          </div>
          <Counter />
          <ResetButton />
          <TextElement text={this.state.quote} />
        </header>
      </div>
    )
  }

  quoteHandler = async () => {
    getQuote().then(({ data }) => this.setState({quote: data.value}))
  }
}

export default App;
