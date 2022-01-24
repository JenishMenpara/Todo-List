import React, {useState,useEffect} from "react";
import "./index.css";
import Edit  from "../Create/Edit";

export default function Card(props ) {

  const [open, setOpen] = useState(false);
  
  const toggle = () => {
    setOpen(!open)
  }

    const [taskName, setTaskName] = useState("");
    const [des, setDes] = useState("");
    const [status, setStatus] = useState("");

   
   
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        /*  const { name, value } = e.target */
         if (name === "taskName") {
            setTaskName(value)
        } else if (name === "des") {
            setDes(value)
        } 
        else {
            setStatus(value)
        } 

    }
    const updattext = () => {
      let taskObj = {}
      taskObj["Name"] = taskName;
      taskObj["Des"] = des;
      taskObj["Status"] = status;
      props.save(taskObj)
      //alert(taskObj)
      setOpen(false)
      window.location.reload();

  }
 
  
 /*  const updattext = ()=>{
    //
  } */
 
  
  const itemdelete  = ()=>{
    props.removeitem(props.index)
  } 
  
  return (
    <>
      <div className="Main-list-box3">
        {props.status === "Todo" ? (
          <div className="listbox TodoList">
            <p className="ReportName">ToDo</p>
            <ul>
              <li>
                <span>
                  {props.taskadd.Name}:-{props.taskadd.Des}
                </span>
                <button className="right" onClick={()=>setOpen(true)}>ADD</button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div className="Main-list-box2">
        {props.status === "Inprogress" ? (
          <div className="listbox ProgressList">
            <p className="ReportName">In Progress</p>
            <ul>
              <li>
                <span>
                  {props.taskadd.Name}:-{props.taskadd.Des}
                </span>
                <button className="right" onClick={()=>setOpen(true)}>ADD</button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div className="Main-list-box1">
        {props.status === "Done" ? (
          <div className="listbox DoneList">
            <p className="ReportName">Done</p>
            <ul>
              <li>
                <span>
                  {props.taskadd.Name}:-{props.taskadd.Des}
                </span>
                <button className="right" onClick={itemdelete}>REMOVE</button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      
     

      <div>
      


           {open && (
             <div className="inputbox">
                        <div  className="overlay"></div>
                        <div className="inputbox-content">
                            <h2>Update Task</h2>
                            <hr></hr>
                            <form>
                                <div className='form-g' id='text-of-title'>
                                    <label>Title:</label>
                                    <input type="text" value={taskName} onChange={handleChange} name='taskName' /><br />
                                    </div>

                                    <div className='form-g' id='text-of-dis'>
                                        <label>Description:</label>
    
                                        <textarea rows={7} value={des} onChange={handleChange} name='des'></textarea>
                                    </div>
    
                                    <div className='form-g' id='text-of-title'>
    
                                    <label>Status:</label>
                                    <select  value={status} className='show-status' name="status" onChange={handleChange} id="Status" >
                                        <option value="">select </option>
                                        <option value="ToDo">Todo</option>
                                        <option value="Inprogress">Inprogress</option>
                                        <option value="Done">Done</option>
                                    </select>
                                    </div>
                                </form>
                                <hr></hr>
                                <button className="close-inputbox-ADD" onClick={updattext}>Update List</button>
                                <button className="close-inputbox-Cancel" onClick={toggle}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
      



      
      <Edit />
    </>



  );
}
