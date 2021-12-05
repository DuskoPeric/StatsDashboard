import { useState } from "react";
import "./selectBox.scss";

const SelectBox = ({ data, handlePlayer }) => {
  const [activePlayer, setActivePlayer] = useState(data[0].name);
  const [openSelect, setOpenSelect] = useState(false);
  const handleSelect = () => {
    setOpenSelect(prev => (prev = !prev));
  };
  const handleClick = option => {
    setActivePlayer(option.name);
    handlePlayer(option.id);
  };
  return (
    <div
      onClick={handleSelect}
      tabIndex={0}
      className={`select-box ${openSelect ? "arrow-down" : "arrow-up"}`}
      onBlur={() => {
        setOpenSelect(false);
      }}
    >
      <p>{activePlayer}</p>
      {openSelect && (
        <div className="options-box">
          {data.map(option => (
            <div
              key={option.id}
              onClick={() => {
                handleClick(option);
              }}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
