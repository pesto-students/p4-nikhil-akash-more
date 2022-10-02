import React, {useState, useRef, useEffect} from "react";

function usePrevious(value){
    const ref = useRef();
    useEffect(() =>{
        ref.current = value;
    });
    return ref.current;
}

export default function ToDo(props) {
    const {id,name,completed, toggleTaskCompleted, deleteTask, editTask} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    const wasEditing = usePrevious(isEditing);
    useEffect(() =>{
        if(!wasEditing && isEditing){
            editFieldRef.current.focus();
        } 
        if(wasEditing && !isEditing) {
            editButtonRef.current.focus();
          }
    }, [isEditing, wasEditing]);
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
                    <input type="text"id={id} className="todo-text" onChange={handleChange} ref={editFieldRef}/>
            </div>
            <div className="btn-group">
                    <button type="button" className="btn todo-cancel" onClick={() => setIsEditing(false)}>
                        Cancel <span className="visually-hidden">renaming  {name}</span>
                    </button>
                    <button type="submit" className="btn btn__primary todo-edit">
                        Save <span className="visually-hidden">New name for {name}</span>
                    </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="stack-small">
        <div className="c-cb">
            <input id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleTaskCompleted(id)}/>
            <label className="todo-label" htmlFor={id}>
                {name}
            </label>
        </div>
        <div className="btn-group">
            <button type="button" className="btn" onClick={() => setIsEditing(true)} ref={editButtonRef}>
                Edit <span className="visually-hidden">{name}</span>
            </button>
            <button type="button" className="btn btn__danger" onClick={() => deleteTask(id)}>
                Delete <span className="visually-hidden">{name}</span>
            </button>
        </div>
    </div>
    );
    return isEditing ? editingTemplate : viewTemplate;
}