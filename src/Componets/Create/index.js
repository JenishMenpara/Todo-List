import React, { useState, useEffect } from "react";
import Todolist from "../Todolist/index";
import './List.json';
import Card from "./Card";
import './List.json';

export default function Index() {
  const [taskList, setTaskList] = useState([]);

  const saveTask = (taskObj) => {
    let temList = taskList;
    temList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(temList));
    setTaskList(temList);
  };

useEffect(() =>{
    let array =localStorage.getItem("taskList")
  
    if(array){
        let obj = JSON.parse(array)
        setTaskList(obj)
    }
},[])

  
  return (
    <>
      <Todolist save={saveTask} />
      
        {taskList && taskList.map((obj, index) =>  <Card taskadd = {obj} index={index} />)}
       {/*  {taskList.map((obj)=><p>{obj.Name}, {obj.Des} </p>)} */}
      

      
     
    </>
  );
}
