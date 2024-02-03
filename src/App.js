import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["courseGoals"]);

  useEffect(() => {
    if (cookies.courseGoals) {
      setCourseGoals(cookies.courseGoals);
    }
  }, [cookies.courseGoals]);

  const addGoalHandler = (enteredText) => {
    const newGoal = {
      text: enteredText,
      id: Math.random().toString(),
      completed: false,
    };
    setCourseGoals((prevGoals) => [...prevGoals, newGoal]);
    updateCookie([...courseGoals, newGoal]);
  };

  const toggleCompletionHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      updateCookie(updatedGoals);
      return updatedGoals;
    });
    removeCookie("courseGoals");
  };

  const updateCookie = (updatedGoals) => {
    setCookie("courseGoals", updatedGoals, { path: "/" });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList
        items={courseGoals}
        onToggleCompletion={toggleCompletionHandler}
      />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
