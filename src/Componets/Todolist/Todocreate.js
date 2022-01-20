import React, { useState } from 'react';
import Todolist from '../Todolist/index';


export default function Todocreate() {

    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) => {
        let temList = taskList;
        temList.push(taskObj);
        setTaskList(temList);
        console.log(taskObj);
        //setOpen(false);
    }

    return (

        <>
            <div>
                {taskList.map((obj) => <li>{obj.Name} </li>)}
            </div>
            <Todolist save={saveTask} />
        </>
    )
}
