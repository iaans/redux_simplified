import "./Form.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { setPersonName, setPersonAge } from "../store/actions/person";

function Form({ setPersonName, setPersonAge }) {
  const navigate = useNavigate();

  return (
    <div className="form-input">
      <h3>Insert your name</h3>

      <input type="text" onChange={(e) => setPersonName(e.target.value)} />

      <h3>Insert your age</h3>
      <input type="text" onChange={(e) => setPersonAge(e.target.value)} />
      <div>
        <button onClick={() => navigate("/result")}>Enviar</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  setPersonName: (name) => {
    dispatch(setPersonName(name));
  },
  setPersonAge: (age) => {
    dispatch(setPersonAge(age));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
