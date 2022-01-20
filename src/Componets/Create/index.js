import React, {useState} from 'react'
import Todolist from '../Todolist/index'

export default function Index() {
    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) =>{
        let temList = taskList;
        temList.push(taskObj)
        localStorage.setItem('taskList', JSON.stringify(temList)  )
        setTaskList(temList)
        //setOpen(false)
    }

    return (

        <>
        <div>
         {taskList.map((obj) => <li>{obj.Name} </li>)}
        </div>
             <Todolist  save = {saveTask} />
        </>
    )
}
