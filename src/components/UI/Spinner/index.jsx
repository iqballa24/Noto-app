import React from "react";
import ReactDOM from "react-dom";
import { BsSquareFill } from "react-icons/bs";
import classes from "../../../styles/Spinner.module.css";

const portalElement = document.getElementById("overlays");

const Spinner = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 z-20">
          <div className={classes.waterfall}>
            <div>
              <BsSquareFill className="text-cyan" />
            </div>
            <div>
              <BsSquareFill className="text-cyan" />
            </div>
            <div>
              <BsSquareFill className="text-cyan" />
            </div>
            <div>
              <BsSquareFill className="text-cyan" />
            </div>
          </div>
        </div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Spinner;
