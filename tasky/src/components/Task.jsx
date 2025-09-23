import React from "react";

const formatPriority = (priority) => {
  if (!priority) {
    return null;
  }

  return priority.charAt(0).toUpperCase() + priority.slice(1);
};

const Task = ({ title, deadline, description, priority, done, markDone }) => {
  const priorityLabel = formatPriority(priority);

  return (
    <div className={`card${done ? " card-done" : ""}`}>
      <div className="card-header">
        <p className="title">{title}</p>
        {priorityLabel && (
          <span className={`priority-badge priority-${priority}`}>
            {priorityLabel}
          </span>
        )}
      </div>
      <div className="card-body">
        <p className="deadline-label">Due: {deadline}</p>
        {description && <p className="task-description">{description}</p>}
        <button onClick={markDone} className="doneButton">
          Done
        </button>
      </div>
    </div>
  );
};

export default Task;
