import {useState} from "react";

export default function Form(props){
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        name.trim() === '' ? alert('Please enter a task name') : props.addTask(name);
        setName("");
    }
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          value={name}
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg add_button">
          Add
        </button>
      </form>
    )
}