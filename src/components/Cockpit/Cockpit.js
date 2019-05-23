import React from 'react';
import CSSclasses from './Cockpit.css';


const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = CSSclasses.Red;
    }
    if(props.persons.length <= 2){
      assignedClasses.push(CSSclasses.red);  //assignedClasses =[red]
      
    }
    if(props.persons.length <= 1){
      assignedClasses.push(CSSclasses.bold); //assignedClasses = [red, bold]
    }
    return(
        <div className = {CSSclasses.Cockpit}>
            <h1>Hi,I'm a React App </h1>
            <p className = {assignedClasses.join(' ')}>This is really working!</p> 
            <button      
                className = {btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;
