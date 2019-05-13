import React from 'react';
import './Person.css';

const person = (props) => {  //argument name be anything
    
    return(  
    
     <div className = "Person">    
    <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type = "text" onChange={props.changed} value = {props.name}/>
      </div>
    )
};

export default person;


/* class Person extends Component{
    render(){
        return <p>My name is {this.props}</p>
    }
    while using class based components it's this.props
}*/ 