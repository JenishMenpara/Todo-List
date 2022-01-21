import React, { useState } from 'react'
import './index.css';



  
export default function Index(props) {

    //open create box
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }
    
    
    
    // set value for title and dec for writing in title and des box
    
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
    // save value of title and des in obj array
    const savetext = () => {
        let taskObj = {}
        taskObj["Name"] = taskName;
        taskObj["Des"] = des;
        taskObj["Status"] = status;
        props.save(taskObj)
        //alert(taskObj)
        setOpen(false)

    }
    
    return (

        <>
            <div className='c-task'>
                <h3 className='todotext'>Todo List</h3>
                <button
                    type='button' className='creat-btn' id='create-btn' onClick={toggle}>Create Task</button>
            </div>
            <div>


                {open && (
                    <div className="inputbox">
                        <div  className="overlay"></div>
                        <div className="inputbox-content">
                            <h2>Create Task</h2>
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
                                    <option value="inprogress">Inprogress</option>
                                    <option value="Done">Done</option>
                                </select>
                                </div>
                            </form>
                            <hr></hr>
                            <button className="close-inputbox-ADD" onClick={savetext}>ADD List</button>
                            <button className="close-inputbox-Cancel" onClick={toggle}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
            <div className='task-container'>


            </div>
            
        </>
    )
}
