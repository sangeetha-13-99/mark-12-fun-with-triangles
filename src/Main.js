import Istriangle from './Istriangle';
import Trianglequiz from './Trianglequiz';
import Trianglearea from './Trianglearea';
import Hypotenuse from './Hypotenuse';

import {useState} from 'react';
let tabs={
  'isTriangle?':'Istriangle',
  'triangle Quiz':'Trianglequiz',
  'area Of Triangle':'Trianglearea',
  'Hypotenuse':'Hypotenuse'
}
export default function Main(){
let [component,setComponent]=useState('isTriangle?');

function clickhandler(e){
  // e.target.classList.add('selected');
  let tab=e.target.textContent;
  setComponent(tab);
}
function showComponent(components){
  switch(components){
    case 'Istriangle':
      return <Istriangle/>
    case 'Trianglequiz':
      return <Trianglequiz/>
    case 'Trianglearea':
      return <Trianglearea/>
    case 'Hypotenuse':
      return <Hypotenuse/>
  }
}
  return (
    <div>
      <div className="navbar">
        <h2>FUN WITH TRIANGLES</h2>
        <ul>
          {Object.keys(tabs).map(items=>{
            console.log(component==items)
            return (<li key={items} className={'navTab '+ (component===items?'selected':'')} onClick={clickhandler}>{items}</li>)
          })}
        </ul>
      </div>
      <div className="mainContainer">
        {showComponent(tabs[component])}
      </div> 
    </div>
  )
}