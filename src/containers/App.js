import React,{Component} from 'react';
import CSSclasses from './App.css';  //inline functions are removed and import from
// from app.css where it conatins all style functons
import Persons from '../components/Persons/Persons';// file extension doesn't need to have any name 
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    
  }
   state = {
     persons: [
       {id:'asfa1',name: 'surya', age: 18},
       {id:'hghg1',name: 'pratap', age: 8},
       {id:'lkju11',name: 'my', age: 25}
     ],
     otherState: 'some other state',
     showPersons: false
   }
   static getDerivedStateFromProps(props, state){
     console.log('[App.js] getDerivedStateFromProps', props);
     return state;
   }
  // componentWillMount(){
    // console.log('[App.js] componentWillMount');
   //}
   componentDidMount(){
     console.log('[App.js] componentDidMount');
   }
   shouldComponentUpdate(nextProps, nextState){
      console.log('[App.js] shouldComponentUpdate');
      return true;
   }/*shouldComponentUpdate is used for performance */
   componentDidUpdate(){
     console.log('[App.js] componentDidUpdate');

   }


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
    console.log('[App.js] render');
    let persons = null;
    
    if(this.state.showPersons){  
      //if block cannot be used in jsx file it can be used in java script language so we used here
      persons= (
          <Persons
           persons = {this.state.persons}
           clicked = {this.deletePersonHandler}
           changed = {this.nameChangedHandler} />
      );
      
      /*if list changes index also changes but it doesn't effect react for that now we r using id's */
    }
    
 
    


  return (
    <div className={CSSclasses.App}>
      <Cockpit
      title = {this.props.appTitle}
      showPersons = {this.state.showPersons}
      persons = {this.state.persons}
      clicked = {this.togglePersonHandler}/>
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


/*functional components are only for presentation
class components  lifecycles can be found in it
react app can also be built using only functional components 
we can manage it*/