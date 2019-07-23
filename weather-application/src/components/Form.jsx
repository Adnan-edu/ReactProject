import React, { Component } from "react";

const Form = props => {
  return (
    <form className="form-horizontal" onSubmit={props.getWeatherData}>
      <div class="form-group">
        <label class="control-label col-sm-2" for="city">
          City:{" "}
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            name="city"
            placeholder="City..."
            className="form-control"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="country">
          Country:{" "}
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            name="country"
            placeholder="Country..."
            className="form-control"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
