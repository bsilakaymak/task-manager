import { useEffect, useState } from "react";

const Home = () => {
  // const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  // const addTask = async (name: string) => {
  //   try {
  //     await fetch(`/api/v1/tasks`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: name,
  //       }),
  //     });
  //   } catch {
  //     throw new Error("Error");
  //   }
  // };

  const getTasks = async () => {
    const response = await fetch("/api/v1/tasks", {
      method: "GET",
    });
    const result = await response.json();
    setTasks(result);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length !== 0 &&
        tasks.map((task: any) => {
          return (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.done ? "FINISHED TASK" : "OPEN TASK"}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
