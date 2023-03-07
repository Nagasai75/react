/*React is the single page application where we can apply both the html and javascript code.
It will decreases the code complexity.JSX is the Javascript extension  
where it is similar to the html code.*/


import './App.css';
import {ComponentOne} from './componentOne.js'
import {ComponentTwo} from './componentTwo.js'
import {ComponentThree} from './componentThree.js'
import {ComponentFour} from './componentFour.js'

/*There are two types of components .Functional and Class, but class is not used at present due to code complexity 
by using class component.
Functional component is used here and the name of the function is starts with capital letter.
In paranthesis props is given.
In return JSX gives the react component which will display on the web page portal*/

function App() {
  return (

     <div> 
      {/* <h1>Iam heading one...from first component</h1>
      <h2>Iam heading two...fron second component</h2>
      <h3>Iam heading three...from third component</h3>
  <button>Click Me!!</button> */}

    <ComponentOne/>
    <ComponentTwo/>
    <ComponentThree/>
    <ComponentFour/>


    </div>
        
   
  );
}

export default App;
