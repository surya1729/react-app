import React, {Component} from 'react';
import Person from './Person/Person';
class Persons extends Component {
 // static getDerivedStateFrom(props,state){
   // console.log('[Persons.js] getDerivedStateFromProps');
    //return state;
  //}
  //componentWillRecieveProps(props){
    //console.log('[Persons.js] componentWillRecieveProps', props);
  //}

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'Snapshot!'};
  }
  //componentWillUpdate(){
//
  //}

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render(){
    console.log('[Persons.js] rendering..');
    return this.props.persons.map((person, index) => { // here person can be any thing 
    return ( 
    <Person 
      click = {()=> this.props.clicked(index)}
      name={person.name}
      age = {person.age}
      key = {person.id}
      changed={(event) => this.props.changed(event,person.id)}/>
    );
  });
  }
};

export default Persons;


/*if the function is one line we can ommit the return since the above function is 
arrow function "()" this indicates that the arrow function can directly returns 
1. here props contains array of persons
2.In const.persons we can ommit (); this since it is not jsx code it is just a javascript code.
Here deletePersonHandler and nameChangedHandler will not work persons is not a class it is in another file
those are changed to clicked and changed
*/

