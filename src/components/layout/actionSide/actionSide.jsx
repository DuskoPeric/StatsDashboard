import { useState } from "react";
import ActionForm from "./actionForm/actionForm";
import "./actionSide.scss";
import { Transition } from "react-transition-group";

const ActionSide = ({ updateGames, data, changeWide }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className={`action-container ${showForm ? "open" : ""}`}>
      <Transition in={!showForm} mountOnEnter unmountOnExit timeout={0}>
        {state => (
          <div className="add-btn-holder">
            <button
              className={`add-btn ${state === "entered" ? "showed" : ""}`}
              onClick={() => {
                setShowForm(true);
                changeWide(true);
              }}
            ></button>
          </div>
        )}
      </Transition>
      <Transition in={showForm} mountOnEnter unmountOnExit timeout={0}>
        {state => (
          <ActionForm
            show={state}
            data={data}
            closeForm={() => {
              setShowForm(false);
              changeWide(false);
            }}
            updateGames={(data, id) => {
              setShowForm(false);
              updateGames(data, id);
              changeWide(false);
            }}
          />
        )}
      </Transition>
    </div>
  );
};

export default ActionSide;
