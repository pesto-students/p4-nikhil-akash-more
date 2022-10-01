import React, {useState} from "react";

export default function ToDo(props) {
    const {id,name,completed, toggleTaskCompleted, deleteTask, editTask} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const handleChange = (e) =>{
        setNewName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(id, newName);
        setNewName("");
        setIsEditing(false);
      }
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {name}
                </label>
                    <input type="text"id={id} className="todo-text" onChange={handleChange}/>
            </div>
            <div className="btn-group">
                    <button type="button" className="btn todo-cancel" onClick={() => setIsEditing(false)}>
                        Cancel <span className="visually-hidden">renaming  {name}</span>
                    </button>
                    <button type="submit" className="btn btn__primary todo-edit" onClick={() => editTask(id)}>
                        Save <span className="visually-hidden">New name for {name}</span>
                    </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="stack-small">
        <div className="c-cb">
            <input id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleTaskCompleted(id)}/>
            <label className="todo-label" htmlFor="todo-0">
                {name}
            </label>
        </div>
        <div className="btn-group">
            <button type="button" className="btn" onClick={() => setIsEditing(true)}>
                Edit <span className="visually-hidden">{name}</span>
            </button>
            <button type="button" className="btn btn__danger" onClick={() => deleteTask(id)}>
                Delete <span className="visually-hidden">{name}</span>
            </button>
        </div>
    </div>
    );
    console.log(isEditing, "isEditing");
    return isEditing ? editingTemplate : viewTemplate;
}