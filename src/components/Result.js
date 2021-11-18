import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function Result({ name, age }) {
  const navigate = useNavigate();
  return (
    <div className="form-input">
      <h1> Your name is: </h1>
      <h3>{name}</h3>
      <h1>Your age is: </h1>
      <h3>{age}</h3>

      <button className="button-11" onClick={() => navigate("/")}>
        Voltar
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { name, age } = state.person;
  return { name, age };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
