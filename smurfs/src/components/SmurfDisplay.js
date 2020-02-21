import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs, submitSmurf } from "./actions";
import './App.css';

const SmurfDisplay = props => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = event => {
    setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.submitSmurf(newSmurf);
    props.getSmurfs();
  };

  return (
    <>
      <h1 className="village">Village</h1>
      {props.loading && <div>Loading</div>}
      {props.smurfs &&
        props.smurfs.map(smurf => (
          <div className="smurf-item">
            <h2>{smurf.name}</h2>
            <h3>{smurf.age} years old</h3>
            <h3>{smurf.height} tall</h3>
          </div>
        ))}
      <button onClick={props.getSmurfs} classname="button">Get Smurfs</button>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Smurf Name"
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Smurf Age"
          onChange={handleChange}
        />
        <input
          name="height"
          type="text"
          placeholder="Smurf Height (cm)"
          onChange={handleChange}
        />
        <button>Submit Smurf</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  // console.log(state.smurfs)
  return {
    smurfs: state.smurfs,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getSmurfs, submitSmurf })(
  SmurfDisplay
);
