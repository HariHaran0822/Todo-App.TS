import { CourseGoalsProps } from "../../App";
import { CourseGoal } from "../CourseGoals";

type CourseGoalsListProps = {
  goals: Array<CourseGoalsProps>;
  handleRemoveGoals: (id: number) => void;
};

export const CourseGoalsList = ({
  goals,
  handleRemoveGoals,
}: CourseGoalsListProps) => {
  return (
    <div>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              handleRemoveGoals={handleRemoveGoals}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
};
