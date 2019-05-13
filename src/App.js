import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';// file extension doesn't need to have any name 


class App extends Component {
   state = {
     persons: [
       {name: 'surya', age: 18},
       {name: 'pratap', age: 8},
       {name: 'my', age: 25}
     ],
     otherState: 'some other state;'
   };

   switchNameHandler = (newName) => {
     //console.log('was clicked');
     // DON'T DO THIS: this.state.persons[0].name = 'suryapratap'
     this.setState(  {
       persons: [
          {name: newName, age: 18},
          {name: 'pratap', age: 8},
          {name: 'my', age: 20}
       ]
     } )
    }
    nameChangedHandler = (event) => {
      this.setState(  {
        persons: [
           {name: 'surya', age: 18},
           {name: event.target.value, age: 8},
           {name: 'my', age: 25}
        ]
      } )
    }
  render(){
  return (
    <div className="App">
      <h1>Hi,I'm a React App </h1>
      <p>this is really working!</p> 
      <button onClick={() => this.switchNameHandler('chalumuri!!')}>Switch Name</button>
      <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
      <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'surya!!')}
      changed = {this.nameChangedHandler}>My Hobbies: Reading</Person>
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
    </div>

  );
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'does this work now?'));
   // to generate button in host
        /*make sure that switchNameHandler() is not called as we just calling its reference so it is switchNameHandler*/
   
  }
}
export default App;
/*<button onClick={this.switchNameHandler.bind(this, 'chalumuri')}>Switch Name</button> 
while clicking switch name button then surya is replaced with chalumuri
and similarly 
 <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'surya!!')}>My Hobbies: Reading</Person>
by clicking this link in output file it surya/chalumuri changes to surya!!*/


/*switchNameHandler() by using this we can pass arguments but it
is somewhat inefficent ...
it is better to "bind" then the above */