import React, {useState} from 'react'
import Todolist from '../Todolist'

export default function Index() {
    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) =>{
        let temList = taskList;
        temList.push(taskObj)
        setTaskList(temList)
        

    }

    return (

        <>
        <div>
            {taskList.map((obj)=><li>{obj.Name}</li>)}
        </div>
             <Todolist save = {saveTask}/>
        </>
    )
}
