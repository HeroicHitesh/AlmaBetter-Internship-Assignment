import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMarks } from "../../actions/marks";

export class Form extends Component {
  state = {
    roll_no: "",
    name: "",
    maths_marks: "",
    physics_marks: "",
    chemistry_marks: "",
    total_marks: "",
    percentage: "",
  };

  static propTypes = {
    addMarks: PropTypes.func.isRequired,
  };

  calculateSum() {
    var sum = 0;
    $(".marks").each(function () {
      if (!isNaN(this.value) && this.value.length != 0) {
        sum += parseInt(this.value);
      }
    });
    $("#total_marks").html(sum);
    $("#percentage").html(sum / 3);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.calculateSum();
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      roll_no,
      name,
      maths_marks,
      physics_marks,
      chemistry_marks,
      total_marks,
      percentage,
    } = this.state;
    const marks = {
      roll_no,
      name,
      maths_marks,
      physics_marks,
      chemistry_marks,
      total_marks,
      percentage,
    };
    this.props.addMarks(marks);
    this.setState({
      roll_no: "",
      name: "",
      maths_marks: "",
      physics_marks: "",
      chemistry_marks: "",
      total_marks: "",
      percentage: "",
    });
  };

  render() {
    const {
      roll_no,
      name,
      maths_marks,
      physics_marks,
      chemistry_marks,
      total_marks,
      percentage,
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Marks</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Roll No</label>
            <input
              className="form-control"
              type="text"
              name="roll_no"
              onChange={this.onChange}
              pattern="[A-Za-z0-9]"
              required
              value={roll_no}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              pattern="[A-Za-z]"
              required
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Maths Marks</label>
            <input
              className="form-control marks"
              type="number"
              name="maths_marks"
              onChange={this.onChange}
              required
              value={maths_marks}
              min={0}
              max={100}
            />
          </div>
          <div className="form-group">
            <label>Physics Marks</label>
            <input
              className="form-control marks"
              type="number"
              name="physics_marks"
              onChange={this.onChange}
              required
              value={physics_marks}
              min={0}
              max={100}
            />
          </div>
          <div className="form-group">
            <label>Chemistry Marks</label>
            <input
              className="form-control marks"
              type="number"
              name="chemistry_marks"
              onChange={this.onChange}
              required
              value={chemistry_marks}
              min={0}
              max={100}
            />
          </div>
          <div className="form-group">
            <label>Total Marks</label>
            <span
              className="form-control"
              id="total_marks"
              name="total_marks"
              value={total_marks}
            />
          </div>
          <div className="form-group">
            <label>Percentage</label>
            <span
              className="form-control"
              id="percentage"
              name="percentage"
              value={percentage}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addMarks })(Form);
