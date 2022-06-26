const TaskList = ({ tasks }) => {
  return (
    <table className="table-container">
      <thead>
        <tr className="table-header">
          <th className="checkbox">
            <input
              type="checkbox"
              style={{ color: "lightgrey", opacity: "0.5" }}
            />
          </th>
          <th>ID</th>
          <th>Project</th>
          <th>Task</th>
          <th>Client Name</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr className="table-body" key={task.id}>
            <td className="checkbox">
              <input
                type="checkbox"
                style={{ color: "lightgrey", opacity: "0.5" }}
              />
            </td>
            <td className="id-project">{task.id}</td>
            <td className="id-project">{task.project}</td>
            <td>{task.task}</td>
            <td>{task.clientname}</td>
            <td>{task.duedate}</td>
            <td>
              <div className={task.status}>{task.status}</div>
            </td>
            <td>
              <div className={task.priority}>{task.priority}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
