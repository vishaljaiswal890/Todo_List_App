import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onToggleCompletion={() => props.onToggleCompletion(goal.id)}
          completed={goal.completed}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
