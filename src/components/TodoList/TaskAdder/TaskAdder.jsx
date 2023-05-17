import React, { useState } from 'react';
import styles from './TaskAdder.module.css'

const TaskAdder = ({addToList}) => {
    const [taskTitle, setTaskTitle] = useState('')
    const addAndClear = ()=> {
        if (taskTitle){
            addToList(taskTitle)
            setTaskTitle('')
        }
    }
    return (
        <div className={styles.task_adder}>
            <div className={styles.input_outer}>
                <input className={styles.input_title}
                    onChange={e=> setTaskTitle(e.target.value)} 
                    placeholder='Введите элемент для списка..'
                    value={taskTitle}
                />
            </div>
            <button onClick={e=>{addAndClear()}}>+</button>
        </div>
    );
};

export default TaskAdder;