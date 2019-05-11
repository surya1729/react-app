import React,{ useState } from 'react';
import './App.css';
import Person from './Person/Person';// file extension doesn't need to have any name 

const app = props => {
    const [ personsState, setPersonsState] = useState(
      {
      persons: [
        {name: 'surya', age: 18},
        {name: 'pratap', age: 8},
        {name: 'my', age: 25}
      ]
    });
    const [otherState,setOtherState] = useState("some other value");
    console.log(personsState,otherState);
    const switchNameHandler = () => {
      //console.log('was clicked');
      // DON'T DO THIS: this.state.persons[0].name = 'suryapratap'
      setPersonsState(  {
        persons: [
           {name: 'suryachalumuri', age: 18},
           {name: 'pratap', age: 8},
           {name: 'my', age: 20}
        ]
      } ); 
     };

  return (
    <div className="App">
      <h1>Hi,I'm a React App </h1>
      <p>this is really working!</p> 
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
      <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My Hobbies: Reading</Person>
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
    </div>

  );
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'does this work now?'));
   // to generate button in host
        /*make sure that switchNameHandler() is not called as we just calling its reference so it is switchNameHandler*/
   
}
export default app;
/*this should be removed because we are not using 
any class we just using only function */
