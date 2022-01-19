import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';


type Todo =  Readonly<{text:string, done:boolean}>

function App()
{
  const [elements, changeElements] = React.useState<Todo[]>([]);
  

  return  <div>
            <div id="myDIV" className="header">
              <h2>My To Do List</h2>
              <input type="text" id="myInput" placeholder="Title..."/>
              <span onClick={()=>{ HandleAdd()}} className="addBtn">Add</span>
          
            </div>
            <ul id="myUL">
              {elements.map((a)=>SingleTodo(a))}
            </ul>
          </div>


    function HandleAdd() {
      const val = (document.getElementById("myInput") as HTMLInputElement).value
      if (val==='')
      {
        alert("You must write something!"); 
      }
      else{
      changeElements(elements.concat([{text:val,done:false}]))
      }
    }
    
    function HandleDelete(todo: Todo)
    {
      changeElements(elements.filter((el,idx,arr)=> el!==todo))
    }

    function ToggleCheck(cTodo:Todo, tTodo : Todo)
    {
        if (cTodo === tTodo)
      
          return {text : cTodo.text, done:!cTodo.done}
        return tTodo
    }

    function HandleCheck(todo:Todo)
    {
      changeElements(elements.map((a)=>ToggleCheck(todo,a)))
    }

    function SingleTodo(todo: Todo)
    {
      if (! todo.done)
          return <li> <text onClick={()=>HandleCheck(todo)}>{todo.text}</text>  <span className ='close' onClick={()=>HandleDelete(todo)}> ×</span></li>
      return <li className='checked' > <text onClick={()=>HandleCheck(todo)}>{todo.text}</text>  <span className ='close' onClick={()=>HandleDelete(todo)}> ×</span></li>
    }
   
          
         
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
