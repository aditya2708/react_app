
import { useState } from 'react';

const App = () => {
    const [activity, setActivity] = useState('');
    const [edit, setEdit] = useState({});
    const [todos, setTodos] = useState([]);

    function generateId () {
      return Date.now();
    }

    function saveTodo (event) {
      event.preventDefault()
     if (edit.id) {
      const updatedTodo = {
        id : edit.id,
        activity,
      }
      
      const editTodoIndex = todos.findIndex(function(todo){
        return edit.id === todo.id;
      });
      
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;

      setTodos(updatedTodos);
      return;
     }
   
      setTodos([...todos,{
        
        id : generateId(),
        activity,
        
      }]); 
      setActivity('');
    }

    function removeTodo (todosId) {
      const filteredTodo = todos.filter(function(todo){
        return todo.id !== todosId
      }); 
      setTodos(filteredTodo);   
    }

    function editTodo (todo) {
      setActivity(todo.activity);
      setEdit(todo);
    }

   
  
   return (
      <>
      <h1>aaaa</h1>
      <form onSubmit={saveTodo}>
        <input type="text" placeholder='nama aktivitas'
        value={activity}
        onChange={function(event){
          setActivity(event.target.value);
        }}/>
        <button type='submit'>{edit.id ? 'Simpan' : 'Tambah'}</button>
      </form>
      <ul>
        {todos.map(function(todo) {
          return <li key={todo.id}>{todo.activity}
          <button onClick={editTodo.bind(this, todo)}>Edit</button>
          <button onClick={removeTodo.bind(this, todo.id)}>remove</button>
          </li>
        })}
      </ul>
      </>
      

    )
        
};

export default App;