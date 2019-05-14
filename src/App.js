import React,{Component} from 'react';
import './App.css';
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

    nameChangedHandler = (event) => {
      this.setState(  {
        persons: [
           {name: 'surya', age: 18},
           {name: event.target.value, age: 8},
           {name: 'my', age: 25}
        ]
      } )
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
      backgroundColor:'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
            key = {person.id} />
          })}
        </div>
      );
      /*if list changes index also changes but it doesn't effect react for that now we r using id's */
    }
  return (
    <div className="App">
      <h1>Hi,I'm a React App </h1>
      <p>this is really working!</p> 
      <button 
        style={style}      
        onClick={ this.togglePersonHandler}>Toggle Persons</button>
     {persons} 
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