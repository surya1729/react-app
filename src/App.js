import React,{Component} from 'react';
import './App.css';
import Radium, {StyleRoot}from 'radium';
import Person from './Person/Person';// file extension doesn't need to have any name 


class App extends Component {
   state = {
     persons: [
       {id:'asfa1',name: 'surya', age: 18},
       {id:'hghg1',name: 'pratap', age: 8},
       {id:'lkju11',name: 'my', age: 25}
     ],
     otherState: 'some other state',
     showPersons: false
   };

    nameChangedHandler = (event,id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id ;
      });
      const person = {
        ...this.state.persons[personIndex]
      };
      //const person = Object.assign({}, this.state.persons[personIndex]);
      /*above line of code can also be used instead of spread operator */
      person.name = event.target.value;

      const persons =[...this.state.persons];
      persons[personIndex] = person;
      
      this.setState(  {
        persons: persons} )
    }
     deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons;
        /* there may be a chance of manipulation of array by using this method*/
        //const persons = this.state.persons.slice();
        /*here by using slice() it copies the data to other array */
        const persons = [...this.state.persons]; //modern method

        /*spread  operates spreads the array elements into list of elements to persons  array*/
        persons.splice(personIndex,1); // 1 is number of paragraphs need to be deleted by one click
        this.setState({persons: persons});
        
     }

    togglePersonHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow });
    }
  render(){

    const style = {
      backgroundColor:'green',
      color: 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {   // hover is valid css pseudo selector radium is used
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if(this.state.showPersons){  
      //if block cannot be used in jsx file it can be used in java script language so we used here
      persons= (
        <div>
          {this.state.persons.map((person, index) => { // here person can be any thing 
            return <Person 
            click = {()=> this.deletePersonHandler(index)}
            name={person.name}
            age = {person.age}
            key = {person.id} 
            changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {     //we cannot use . here as it is a string "[ ]" it is used here
        backgroundColor: 'salmon',
        color: 'black'
      };
      /*if list changes index also changes but it doesn't effect react for that now we r using id's */
    }
    
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');  //classes =[red]
      
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); //classes = [red, bold]
    }
    


  return (
    <StyleRoot>
    <div className="App">
      <h1>Hi,I'm a React App </h1>
      <p className = {classes.join(' ')}>This is really working!</p> 
      <button 
        style={style}      
        onClick={ this.togglePersonHandler}>Toggle Persons</button>
     {persons} 
    </div>
    </StyleRoot>
    


  );
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'does this work now?'));
   // to generate button in host
        /*make sure that switchNameHandler() is not called as we just calling its reference so it is switchNameHandler*/
   
  }
}
export default Radium(App);
/*<button onClick={this.switchNameHandler.bind(this, 'chalumuri')}>Switch Name</button> 
while clicking switch name button then surya is replaced with chalumuri
and similarly 
 <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'surya!!')}>My Hobbies: Reading</Person>
by clicking this link in output file it surya/chalumuri changes to surya!!*/


/*switchNameHandler() by using this we can pass arguments but it
is somewhat inefficent ...
it is better to "bind" then the above */