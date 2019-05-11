import React from 'react';


const person = (props) => {  //argument name be anything
    
    return(  
    
     <div>    
    <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    
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