import { useState } from "react";
import "./actionForm.scss";
import SelectBox from "../../../shared/select/selectBox";

const ActionForm = ({ updateGames, data, show, closeForm }) => {
  const initialData = {
    pts: "",
    min: "",
    fpt: "",
    fps: "",
    tpt: "",
    tps: "",
    ftt: "",
    fts: "",
    reb: "",
    ast: "",
    blk: "",
    stl: "",
    fou: ""
  };
  const [maxFg, setMaxFg] = useState(999);
  const [maxtpt, setMaxTpt] = useState(999);
  const [maxFt, setMaxFtg] = useState(999);
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState(null);
  const [activePlayer, setActivePlayer] = useState(0);

  const validForm = data => {
    for (const item in data) {
      if (data[item] === "") {
        setFormError("All fields are required");
        return false;
      }
    }
    setFormError(null);
    return true;
  };

  const checkIsVlid = () => {
    if (formError) {
      validForm(formData);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    if (!validForm(formData)) {
      return;
    }
    updateGames(formData, Number(activePlayer));
  };
  const handlePlayer = id => {
    setActivePlayer(id);
  };
  const handleInput = e => {
    if (e.target.name === "fpt") {
      setMaxFg(e.target.value);
    } else if (e.target.name === "tpt") {
      setMaxTpt(e.target.value);
    } else if (e.target.name === "ftt") {
      setMaxFtg(e.target.value);
    }
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };
  return (
    <form
      className={`action-form ${show === "entered" ? "open" : ""} ${
        show === "exiting" ? "closed" : ""
      }`}
      onSubmit={submitForm}
    >
      <div>
        <p className="action-title">Add stats for:</p>
        <SelectBox data={data} handlePlayer={handlePlayer} />
      </div>
      <div className="input-block">
        <div className="input-holder">
          <label>PTS</label>
          <input
            min="0"
            name="pts"
            onChange={handleInput}
            type="number"
            onBlur={checkIsVlid}
          />
        </div>
        <div className="input-holder">
          <label>MIN</label>
          <input min="0" name="min" onChange={handleInput} type="number" />
        </div>
        <div className="input-holder">
          <label>
            <b className="larger">2</b>PT
          </label>
          <input
            className="split"
            name="fpt"
            onChange={handleInput}
            type="number"
            min="0"
          />
          <span>/</span>
          <input
            min="0"
            max={maxFg}
            className="split"
            name="fps"
            onChange={handleInput}
            type="number"
          />
        </div>
        <div className="input-holder">
          <label>
            <b>3</b>PT
          </label>
          <input
            className="split"
            name="tpt"
            onChange={handleInput}
            type="number"
            min="0"
          />
          <span>/</span>
          <input
            min="0"
            max={maxtpt}
            className="split"
            name="tps"
            onChange={handleInput}
            type="number"
          />
        </div>
        <div className="input-holder">
          <label>FT</label>
          <input
            className="split"
            name="ftt"
            onChange={handleInput}
            type="number"
            min="0"
          />
          <span>/</span>
          <input
            min="0"
            max={maxFt}
            className="split"
            name="fts"
            onChange={handleInput}
            type="number"
          />
        </div>
        <div className="input-holder">
          <label>REB</label>
          <input min="0" name="reb" onChange={handleInput} type="number" />
        </div>
        <div className="input-holder">
          <label>AST</label>
          <input min="0" name="ast" onChange={handleInput} type="number" />
        </div>
        <div className="input-holder">
          <label>BLK</label>
          <input min="0" name="blk" onChange={handleInput} type="number" />
        </div>
        <div className="input-holder">
          <label>STL</label>
          <input min="0" name="stl" onChange={handleInput} type="number" />
        </div>

        <div className="input-holder">
          <label>FL</label>
          <input min="0" name="fou" onChange={handleInput} type="number" />
        </div>
      </div>
      <div className="form-btns">
        <button className="add" type="submit">
          Add
        </button>
        <button className="cancel" type="button" onClick={closeForm}>
          Cancel
        </button>
      </div>
      {formError && <div className="formNotify">{formError}</div>}
    </form>
  );
};

export default ActionForm;
