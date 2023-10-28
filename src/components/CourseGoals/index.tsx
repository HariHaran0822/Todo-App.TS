import { type ReactNode } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  handleRemoveGoals: (id: number) => void;
};

export const CourseGoal = ({
  title,
  children,
  id,
  handleRemoveGoals,
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => handleRemoveGoals(id)}>Delete</button>
    </article>
  );
};
