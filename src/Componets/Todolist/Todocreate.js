import React, {useState} from 'react';
import Todolist from '../Todolist/index';


export default function Todocreate() {

   const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) =>{
        let temList = taskList;
        temList.push(taskObj)
        setTaskList(temList)
        
    } 

    return (

        <>
        <div>
            {taskList.map((obj)=><p>{obj.Name} </p>)}
        </div>
             <Todolist  save={() => saveTask()}
/>
        </>
    )
}
