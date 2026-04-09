import React from "react";


function Task({ text, onClick, onedit, ondelete, done }) {
    return <div className="task">
        <div className="taskl">
            <div className="ticmark">
                <input type="checkbox" name="checkbox" id="checkbox" onChange={onClick} />
            </div>
            <span id="input" className="input" style={{
                textDecoration: done ? "line-through" : "none",
                color: done ? "grey" : "white",
                cursor: "pointer"
            }}>{text}</span>
        </div>
        <div className="taskr">
            <button className="b2 btn" onClick={onedit}>Edit</button>
            <button className="b1 btn" onClick={ondelete}>Delete</button>
        </div>
    </div>

}

export default Task