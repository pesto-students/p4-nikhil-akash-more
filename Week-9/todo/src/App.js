import { useState } from 'react';
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import ToDo from "./components/ToDo";
import { nanoid } from 'nanoid';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');
  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const editTask = (id, newName) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }
  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <ToDo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} editTask={editTask} />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter}/>
  ));
  const remainingTasks = tasks.filter(FILTER_MAP['Active']).length;
  const taskNoun = remainingTasks === 1 ? 'task' : 'tasks';
  const headingText = remainingTasks === 0 ? 'You are All Set' : `${remainingTasks} ${taskNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>Todo App</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}


export default App;
