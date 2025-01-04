import React, { useCallback, useState } from 'react';

const UseCallBackExample = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, 'Some Task']);
  }, [setTasks]);
  
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

interface ButtonProps {
  addTask: () => void;
}

const Button = React.memo(({ addTask }: ButtonProps) => {
  console.log('rendered');
  return (
    <button className='btn btn-primary' onClick={addTask}>
      Add Task
    </button>
  );
});

export default UseCallBackExample;
