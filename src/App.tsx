import { Header } from "./components/Header";
import GoalsImage from "./assets/goals.jpg";
import { useState } from "react";
import { CourseGoalsList } from "./components/CourseGoalsList";
import { NewGoals } from "./components/NewGoals";

export type CourseGoalsProps = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<Array<CourseGoalsProps>>([]);

  const handleAddGoals = (goals: string, summary: string) => {
    setGoals((prevState) => {
      const newGoals: CourseGoalsProps = {
        id: Math.random(),
        title: goals,
        description: summary,
      };
      return [...prevState, newGoals];
    });
  };

  const handleRemoveGoals = (id: number) => {
    setGoals((prevState) => prevState.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: GoalsImage, alt: "Goals-Image" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoals handleAddGoals={handleAddGoals} />
      <CourseGoalsList goals={goals} handleRemoveGoals={handleRemoveGoals} />
    </main>
  );
}
