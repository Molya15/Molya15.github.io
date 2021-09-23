import React from 'react';
import './Task.css';
import remove from './../images/remove.png';
import double from './../images/double.png';

const Task = ({task, ...props}) =>{
    const Options = () => (
        <div className="options">
            <div className="pics" >
                <img src = {double} alt="double" onClick={props.doubleTask} />
                <img src = {remove} alt="delete" onClick={props.deleteTask} />
            </div>
        </div>); 
    const taskClassName = 'task' + (task.done? ' taskDone' : ''); 

    return (
        <div className={taskClassName}>
            <div>
                <label>
                    <input type="checkbox" onChange={props.doTask} checked = {task.done ? true : false}></input>
                    {task.text}
                </label>
                <span></span>
            </div>
            <Options></Options>
        </div>
    );
}

export default Task;
