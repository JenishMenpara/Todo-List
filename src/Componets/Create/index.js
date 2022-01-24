import React, { useState, useEffect } from "react";
import Todolist from "../Todolist/index";

import Card from "./Card";
//import Status from "./Status";

export default function Index() {
  const [taskList, setTaskList] = useState([]);
  const saveTask = (taskObj) => {
    let temList = taskList; 
    temList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(temList));
    setTaskList(temList);
  };

  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if (array) {
      let obj = JSON.parse(array);
      setTaskList(obj);
    }
  }, []);

 

  const remove = (index) =>{
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}

  return (
    <>
      <Todolist save={saveTask} />
      {/* <Status status={taskList} /> */}

      <div>
        {taskList.filter((cheak)=>cheak.Status === "ToDo").map((obj, index) => (<Card taskadd={obj} index={index}  status="Todo"/> ))}
        {taskList.filter((cheak)=>cheak.Status === "Inprogress").map((obj, index) => (<Card taskadd={obj} index={index} status="Inprogress"/> ))}
        {taskList.filter((cheak)=>cheak.Status === "Done").map((obj, index) => (<Card taskadd={obj}  index={index}  status="Done" removeitem={remove}  /> ))}
      </div>
    </>
  );
}
