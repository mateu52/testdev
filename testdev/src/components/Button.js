import React ,{useState} from 'react';

function Button(start){
    const [sum,setSum]= useState(0);
    // if({start}!==0){
    //   setSum({start});
    // }
  return(
    <div>
      <button type="button">+</button>
      <button type="button">-</button>


      <h3>wynik: {sum} as</h3>
    </div> 
  )
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
