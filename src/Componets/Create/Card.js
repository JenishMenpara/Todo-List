import React from "react";
import "./index.css";

export default function Card(props) {
  /* const todocheak = taskList.filter((cheak)=>cheak.Status == "ToDo");
  const inprogresscheak = taskList.filter((cheak)=>cheak.Status == "Inprogress");
  const donecheak = taskList.filter((cheak)=>cheak.Status == "Done");
   */

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
                <button className="right">ADD</button>
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
                <button className="right">ADD</button>
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
                <button className="right">REMOVE</button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
