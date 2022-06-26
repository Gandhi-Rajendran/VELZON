import { CgSandClock } from "react-icons/cg";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {
  RiTicket2Line,
  RiCheckboxCircleLine,
  RiDeleteBinLine,
} from "react-icons/ri";

const Cards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h6>Total Tasks</h6>
        <div className="card-icon">
          <p style={{ backgroundColor: "#EBF5FB" }}>
            <RiTicket2Line size="1rem" color="blue" />
          </p>
        </div>
        <h2>234k</h2>
        <div className="card-footer">
          <span className="positive">
            <AiOutlineArrowUp color="rgb(3, 226, 3)" />
            17.32%
          </span>
          vs. previous month
        </div>
      </div>
      <div className="card">
        <h6>Pending Tasks</h6>
        <div className="card-icon">
          <p style={{ backgroundColor: "#FEF5E7" }}>
            <CgSandClock size="1rem" color="orange" />
          </p>
        </div>
        <h2>64.5k</h2>
        <div className="card-footer">
          <span className="negative">
            <AiOutlineArrowDown color="red" />
            0.87%
          </span>
          vs. previous month
        </div>
      </div>
      <div className="card">
        <h6>Completed Tasks</h6>
        <div className="card-icon">
          <p style={{ backgroundColor: "#D5F5E3" }}>
            <RiCheckboxCircleLine size="1rem" color="rgb(3, 226, 3)" />
          </p>
        </div>
        <h2>116.21k</h2>
        <div className="card-footer">
          <span className="negative">
            <AiOutlineArrowDown color="red" />
            2.62%
          </span>
          vs. previous month
        </div>
      </div>
      <div className="card">
        <h6>Deleted Tasks</h6>
        <div className="card-icon">
          <p style={{ backgroundColor: "#FDEDEC" }}>
            <RiDeleteBinLine size="1rem" color="red" />
          </p>
        </div>
        <h2>14.84%</h2>
        <div className="card-footer">
          <span className="positive">
            <AiOutlineArrowUp color="rgb(3, 226, 3)" />
            0.63%
          </span>
          vs. previous month
        </div>
      </div>
    </div>
  );
};

export default Cards;
