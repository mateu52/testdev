import React ,{useState} from 'react';
import PropTypes from 'prop-types';

function Button({start1}){
    const [sum,setSum]= useState(start1);
    const [inp, setInp]=useState();
    
    const btn=(event)=>{
      if(event.target.value==="+"){
        setSum(sum+1);
      }
      if(event.target.value==="-"){
        setSum(sum-1);
      }
    }
    const hInp=(event)=>{
      event.preventDefault();
      setInp(event.target.value);
    }
    const hSubmit=(event)=>{
      event.preventDefault();
      setSum(inp);
    }
  return(
    <div>
      <button onClick={btn} type="button" value="+" className='plus'>+</button>
      <button onClick={btn} type="button" value="-" className='minus'>-</button>
      
      <form onSubmit={hSubmit}>
        <input type="number"  onChange={hInp}></input>
        <button type='submit' value="Submit">Zmień</button>
      </form>

      <h3>wynik: {sum} as</h3>
    </div> 
  )
}
Button.propTypes={
  start1:PropTypes.number
}
Button.defaultProps={
  start1:10
}

export default Button;



// import React from 'react';


// export default class Button extends React.Component {
//     state = { color: 'blue', counter: 0}
//     handleClick = () => {
//       this.setState({counter: this.state.counter +1})
//     }
    
//     render(){
//         if(this.state.counter===5) {
//         throw new Error('Za duza liczba');
//       }
//       return <button onClick={this.handleClick}>
//                 {this.props.label} <span>{this.state.counter}</span>
//               </button>;
//     }
//   }
//   Button.defaultProps ={
//     label: 'OK'
//   }
