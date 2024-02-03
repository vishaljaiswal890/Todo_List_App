import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const toggleCompletionHandler = () => {
    props.onToggleCompletion(props.id);
  };
  return (
    <li className={`goal-item ${props.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={toggleCompletionHandler}
      />
      <span className={props.completed ? "completed" : ""}>
        {props.children}
      </span>
    </li>
  );
};

export default CourseGoalItem;
