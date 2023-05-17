import React, { useState } from 'react';
import styles from './TodoList.module.css'
import TaskAdder from './TaskAdder/TaskAdder';
import SingleTask from './SingleTask/SingleTask';


const TodoList = () => {
    const [list, setList] = useState(['Задание 1', 'Задание 2', 'Задание 3', 'Задание 4','Задание 5', 'Задание 6'])
    
    const [title, setTitle] = useState('Мой список')
    const [titleIsEditing, setTitleIsEditing] = useState(false)

    const addToList = (text) => {
        setList([...list, text])
    }
    const deleteFromList = (deletedIndex) => {
        setList(list.filter((el, index) => index !== deletedIndex))
    }


    return (
        <div className={styles.todo}>
            <div className={styles.card}>
                {titleIsEditing 
                ? 
                    <input className={styles.card_header_editing}
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        onKeyPress={e => (e.key === 'Enter' && setTitleIsEditing(false))}
                        onBlur={e => setTitleIsEditing(false)}
                        />
                : 
                    <div className={styles.card_header} onClick={e => setTitleIsEditing(true)}>{title}</div>
                }
                <div className={styles.card_body}>
                    <TaskAdder addToList={addToList}/>
                    {list.length
                    ? 
                    <ul>{list.map((task, key)=>
                        <SingleTask 
                            task={task} 
                            index={key}
                            deleteFromList={deleteFromList}
                            key={key} 
                        />)}
                    </ul>
                    : <p>Ничего нет</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoList;