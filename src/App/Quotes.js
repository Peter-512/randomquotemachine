import React, { Component } from 'react'

class Quotes extends Component {
    render () {

        const divStyle = {
            color: this.props.color
        }
        const buttonStyle = {
            background: this.props.color
        }

        return (
        <div className="quotebox" style={divStyle}>
            <h1 className="headline">Quote of the day</h1>
            <h2 className="quote">{this.props.chosenQuote} </h2>
            <h5 className="author">-{this.props.chosenAuthor} </h5>
            <button style={buttonStyle} className="button" onClick={this.props.onClick} >New quote</button>
        </div>
    );
    }
}
   

export default Quotes;
