import { useEffect,useState } from 'react'
import './App.css'
import Edit from './components/edit';

function App() {

const storeditem=JSON.parse(localStorage.getItem('todoitems'));
 const [todoitems,setTodoItems]=useState(storeditem);
 const[editItemId,seteditItemId]=useState();
let items;
const[editedItem,seteditedItem]=useState();
let toedititem="";
const[strikeid,setStrikeId]=useState();

const additems=(event)=>{
 items=(event.target.value);

 }
  const listitems=(event)=>{
     console.log(items)
  setTodoItems(prev=>{
    console.log(prev)
   return[ ...prev,
     items]}
    )
  ;
  }
  console.log(todoitems)
  const deleteitem=(event)=>{
    const deleteelement=event.target.value
    console.log(deleteelement)
const deletedarray=todoitems.filter((item=>
  item!=deleteelement
))
console.log(deletedarray)
setTodoItems(deletedarray)
  }
  const handleedit=(event)=>{
    seteditedItem(event.target.value)
     console.log(editedItem)
   }
 const edititem=(event)=>{
 toedititem=(event.target.value)
 seteditItemId(event.target.id);
 console.log(editItemId);
 
 }
 const handlesave=(event)=>{
 toedititem=(event.target.value)
 console.log(toedititem);
 console.log(editItemId);
 
  const editedList=todoitems.map((data,i)=>{
     if(i==editItemId){
       console.log(editedItem)
   return editedItem
       }
     else{
      return data
     } 
     
   }  )
   console.log(editedList)
   setTodoItems(editedList)
 }
 const handlecancel=(event)=>{
   console.log(event.target.value)
   seteditItemId(event.target.value)
   console.log(editItemId)
 }
//To store  items in the local storage USEEFFECT is used
useEffect(()=>{ 
  localStorage.setItem('todoitems',
 JSON.stringify (todoitems));
 },
[todoitems])
  return (
    <>
    <div className='maindiv'>
      <h2>Todo List</h2>
      <input type='text' value={items} placeholder='Enter your task' className='inputfield'onChange={additems}></input>
      <button  className="addbutton"onClick={listitems} >Add Todo</button>
      <ul>
        {todoitems?.map((data,i)=><div className='seconddiv' key={i}><div>{data}</div><button className='deletebutton' value={data} onClick={deleteitem}>Delete</button>
        <Edit i={i} editItemId={editItemId} handlecancel={handlecancel} handleedit={handleedit} handlesave={handlesave} edititem={edititem} data={data}/></div>)}
        </ul>
        </div>
    </>
  )
}

export default App
