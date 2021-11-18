import { connect } from "react-redux";

function Result({ name, age }) {
  return (
    <div>
      <h1> Your name is: </h1>
      <h3>{name}</h3>
      <h1>Your age is: </h1>
      <h3>{age}</h3>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { name, age } = state.person;
  return { name, age };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
