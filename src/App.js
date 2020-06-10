/*import React from 'react';  // it is very important react is class React is property or funtion of that class
function App()
{
return <div>Hello world from Fakhra</div>
}
export default App; //it is a component defined in node.js
//
*/
import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App(){
    return  (
        <div ClassName="App">
        <Dinner dishName="chikenkraahi" sweetdish="kheer"/>
        <Holder time="9:00" date="10th june" subject="programming"/>
        </div>
    );
}
export default App;