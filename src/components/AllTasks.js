import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import TaskFilter from "./TaskFilter";

const AllTasks = () => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/tasks")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data from that resource!");
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setTasks(data);
          setError("");
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="task-container">
      <TaskHeader />
      <TaskFilter />
      {loading && (
        <h3 style={{ padding: "16px", color: "rgb(0,255,0)" }}>
          loading.......
        </h3>
      )}
      {error && <h3 style={{ padding: "16px", color: "red" }}>{error}</h3>}
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
};

export default AllTasks;
