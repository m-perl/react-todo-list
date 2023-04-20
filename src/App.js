import react, { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css';
import Form from './components/Form'
import FilterButtons from './components/FilterButtons'
import Todo from './components/Todo'



function App(props) {
  
  const [tasks, setTasks] = useState(props.tasks)
 
  function addTask(name){
    const newTask = {id: `todo-${nanoid()}`, name, completed: false, }
  
    setTasks([...tasks, newTask])
  }

  const taskList = tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} />
  ));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'

  const headingText = `${taskList.length} ${tasksNoun} remaining`

  function toggleTaskCompleted(id){
    console.log(tasks[0])
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <FilterButtons/>

      <h2 id="list-heading">{headingText}</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>

    </div>
  );
}

export default App;
