import { BiSearchAlt2 } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

function TaskFilter() {
  return (
    <div className="task-filter">
      <form className="filter-container">
        <div className="filter-search">
          <input type="search" placeholder="Search for tasks or something..." />
          <span className="filter-search-icon">
            <BiSearchAlt2 size="0.9rem" />
          </span>
        </div>
        <div className="filter-date">
          <input type="search" placeholder="Select date range" />
        </div>
        <div className="filter-all">
          <select>
            <option selected disabled>
              All
            </option>
            <option value="id">ID</option>
            <option value="project">Project</option>
          </select>
        </div>
        <button className="filter-btn">
          <span>
            <TbAdjustmentsHorizontal />
          </span>
          Filters
        </button>
      </form>
    </div>
  );
}

export default TaskFilter;
