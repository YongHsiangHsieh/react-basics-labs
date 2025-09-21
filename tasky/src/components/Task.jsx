import React from "react";

const Task = ({ title, deadline, description }) => {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p>Due: {deadline}</p>
      {description && <p className="task-description">{description}</p>}
    </div>
  );
};

export default Task;
