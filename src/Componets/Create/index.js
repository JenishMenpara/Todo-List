import React, { useState, useEffect } from "react";
import Todolist from "../Todolist/index";
import "./List.json";
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

  return (
    <>
      <Todolist save={saveTask} />
      {/* <Status status={taskList} /> */}

      <div>
        {taskList.filter((cheak)=>cheak.Status == "ToDo").map((obj) => (<Card taskadd={obj} /> ))}
        {taskList.filter((cheak)=>cheak.Status == "Inprogress").map((obj) => (<Card taskadd={obj} /> ))}
        {taskList.filter((cheak)=>cheak.Status == "Done").map((obj) => (<Card taskadd={obj} /> ))}
      </div>
    </>
  );
}
