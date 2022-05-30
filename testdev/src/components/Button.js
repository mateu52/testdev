import React from 'react';


export default class Button extends React.Component {
    state = { color: 'blue', counter: 0}
    handleClick = () => {
      this.setState({counter: this.state.counter +1})
    }
    render(){
      return <button onClick={this.handleClick}>
                {this.props.label} {this.state.counter}
              </button>;
    }
  }
  Button.defaultProps ={
    label: 'OK'
  }