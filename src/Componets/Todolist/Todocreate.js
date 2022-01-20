import React, {useState} from 'react';
import Todolist from '../Todolist/index';


export default function Todocreate() {

    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) =>{
        let temList = taskList;
        temList.push(taskObj)
        localStorage.setItem('taskList', JSON.stringify(temList)  )
        setTaskList(temList)
        /* setOpen(false) */
    }

    return (

        <>
        <div>
           {/*  {taskList.map((obj)=><p>{obj.Name}, {obj.Des} </p>)} */}
        </div>
             <Todolist  save = {saveTask} />
        </>
    )
}
