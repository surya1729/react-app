import React,{ Component} from 'react';
import CSSclasses from'./Person.css';

class Person extends Component {  //argument name be anything
   render(){
    console.log('[Person.js] rendering...');   
    return(  
     
        <div className = {CSSclasses.Person} >    
       <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
       <p>{this.props.children}</p>
       <input 
       type = "text" 
       onChange={this.props.changed} value = {this.props.name}/>
         </div>
       );
   }  
   
};
export default Person;


/* class Person extends Component{
    render(){
        return <p>My name is {this.props}</p>
    }
    while using class based components it's this.props
}*/ 