import React, { Component } from 'react';
import Quotes from "./App/Quotes"
import './App.css';
import QuoteList from "./App/quotes.json"

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#d5c51d", "#d51d89", "#92145e", "#691dd5", "#d5691d", "#cbaef4"];

function randomize(list) {
    return list[Math.floor(Math.random()*list.length)];
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        chosenQuote: randomize(QuoteList).quote,
        chosenAuthor: randomize(QuoteList).author,
        color: randomize(colors),
    }
}

newQuote() {
    this.setState({
        chosenQuote: randomize(QuoteList).quote,
        chosenAuthor: randomize(QuoteList).author,
        color: randomize(colors),
    })
}
    render() {

      const backgroundStyle = {
        background: this.state.color
      }

      return (
        <div id="root" style={backgroundStyle}>
          <Quotes
            chosenQuote={this.state.chosenQuote}
            chosenAuthor={this.state.chosenAuthor}
            color={this.state.color}
            onClick={()=>this.newQuote()}
          />
        </div>

    );
  }

}

export default App;
