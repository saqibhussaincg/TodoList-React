import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let photo = true;


  // const [photo, setphoto] = useState(true);


  // let dresss = dress;
  // let flowers = flower;

  // let flowerer = () => {
  //   setphoto(false)
  //   console.log("flower chal gaya");
  // };

  // let dresser = () => {
  //   setphoto(true)
  //   console.log("dress chal gaya");
  // };

  // function change() {
  //   setphoto(!photo)
  // }

  // console.log("bahar wala function hai ye" + photo);


  const [text, setText] = useState('')
  const [editCondition, setEditCondition] = useState(false)
  const [editIndex, setEditIndex] = useState('')
  const [todoList, setTodoList] = useState([])


  let addTodo = () => {
    console.log('working');

    let check = [...todoList]
    check.push(text)
    setTodoList(check)
    setText('')

  }

  let Delete = (myListNumber) => {
    console.log('delete working');
    console.log(myListNumber);
    let myList = [...todoList];
    console.log("before deleting====>",myList)
    myList.splice(myListNumber, 1)
    console.log("after deleting====>",myList);
    setTodoList(myList)
  }
 

  const updated = () => {
    console.log('update Button')
    console.log(editIndex)
    let myEditedList = [...todoList];
    myEditedList.splice(editIndex, 1, text)
    setTodoList(myEditedList)
    setEditCondition(false)
    setText('')
  }


  const editInput = (index, item) => {
    console.log('edit input')
    setEditCondition(true)
    setText(item)
    setEditIndex(index)
    

  }

  let deleteAll = () => {
    console.log('edit working');
    setTodoList([])

  }

  return (
    // <div className="App">

    //   {photo ? (
    //     <img width="400px" src={dresss} />
    //   ) : (
    //     <img width="400px" src={flowers} />
    //   )}

    //   {photo ? (
    //     <button onClick={flowerer}>Flower</button>
    //   ) : (
    //     <button onClick={dresser}>Dress</button>
    //   )}
    // </div>


    // <div>
    // <img style={{
    //   objectFit : 'contain',
    // }} width="400px" height="400px" src={photo ? dresss : flowers} />

    // <button onClick={change}>Change</button>

    // </div>

    <div className="App">

      <h1> Todo List </h1>



      <input placeholder="Enter Text Here" value={text} onChange={(event) => setText(event.target.value)} />


      {
        editCondition ? <button onClick={updated}>Update</button> : <button onClick={addTodo}>Add Todo +</button>
      }
      
      <ul>
        {
          todoList.map((item, index) => {
            return (
              <li key={index}>
                {index}  {item}
               
                <button onClick={()=>editInput(index , item)}>Edit</button>
                <button onClick={()=>Delete(index)}>Delete</button>
              </li>
            )
          })
        }
      </ul>
      <button onClick={deleteAll}>Delete All</button>


    </div>


  );
}

export default App;
