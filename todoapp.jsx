import { useState } from "react";

export default function TodoApp(){
    const [todolist , setTodoList] = useState([
        {id: 1, work:"Learn React", status: false}
    ]);
    
    const [newWork, setNewWork] = useState("");


    const addTodo = ()=> {
        if(newWork.trim() !==""){
            const newTodo = {
                id: Date.now(),
                work: newWork,
                status : false
            }
            setTodoList([...todolist, newTodo]);
            setNewWork("");              
        }
    };    
    
    const changeStatus = (id) =>{
        setTodoList(todolist.map(todo => 
            todo.id ===id? {...todo, status: !todo.status}: todo
        ));
    };

    return(
        <div>
            <h1>Todo List App</h1>
            <input type="text" 
                value={newWork}
                onChange={(e) => setNewWork(e.target.value)}
                placeholder="Enter New todo Thing"

            />   
            <button onClick={addTodo}>Add Todo</button>
            
            <ul>
                {todolist.map((todo) => (
                    <li key={todo.id}>{todo.work}- {todo.status ? "Done": "Pending"}
                        <button onClick={() => changeStatus(todo.id)}>Change Status</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}