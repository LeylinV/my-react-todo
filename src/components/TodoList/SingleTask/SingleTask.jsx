import React from 'react';
import styles from './SingleTask.module.css'

const SingleTask = ({task, index, deleteFromList}) => {
    const deleteB = () => {
        deleteFromList(index)
    }
    return (
        <>
            <li className={styles.el}>
                <input type='checkbox' id={index} />
                <label htmlFor={index}>{task}</label>
                <button onClick={deleteB}>Х</button>
            </li>
        </>
    );
};

export default SingleTask;