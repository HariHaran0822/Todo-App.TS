import { useRef, type FormEvent } from "react";

type NewGoals = {
  handleAddGoals: (goals: string, summary: string) => void;
};

export const NewGoals = ({ handleAddGoals }: NewGoals) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // new FormData(event.currentTarget); // when use this logic we must add name property in input *
    const goalsInput = goal.current!.value;
    const summaryInput = summary.current!.value;
    handleAddGoals(goalsInput, summaryInput);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goals</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Your summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <button>Add Goals</button>
    </form>
  );
};
