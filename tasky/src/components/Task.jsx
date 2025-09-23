import React from "react";

const formatPriority = (priority) => {
  if (!priority) {
    return null;
  }

  return priority.charAt(0).toUpperCase() + priority.slice(1);
};

const Task = ({ title, deadline, description, priority }) => {
  const priorityLabel = formatPriority(priority);

  return (
    <div className="card">
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
      </div>
    </div>
  );
};

export default Task;
