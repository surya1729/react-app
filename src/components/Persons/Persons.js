import React from 'react';
import Person from './Person/Person';
const persons = (props) => {
  console.log('[Persons.js] rendering..');
  return props.persons.map((person, index) => { // here person can be any thing 
        return ( 
        <Person 
          click = {()=> props.clicked(index)}
          name={person.name}
          age = {person.age}
          key = {person.id}
          changed={(event) => props.changed(event,person.id)}/>
        );
      });
};

export default persons;


/*if the function is one line we can ommit the return since the above function is 
arrow function "()" this indicates that the arrow function can directly returns 
1. here props contains array of persons
2.In const.persons we can ommit (); this since it is not jsx code it is just a javascript code.
Here deletePersonHandler and nameChangedHandler will not work persons is not a class it is in another file
those are changed to clicked and changed
*/

