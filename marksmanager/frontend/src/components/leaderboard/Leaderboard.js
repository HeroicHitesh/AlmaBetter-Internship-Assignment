import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarks } from '../../actions/marks';

export class Leaderboard extends Component {
  static propTypes = {
    marks: PropTypes.array.isRequired,
    getMarks: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getMarks();
  }

  render() {
    return (
      <>
        <h2>Leaderboard</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Maths Marks</th>
              <th>Physics Marks</th>
              <th>Chemistry Marks</th>
              <th>Total Marks</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {this.props.marks.map((mark) => (
              <tr key={mark.id}>
                <td>{mark.id}</td>
                <td>{mark.roll_no}</td>
                <td>{mark.name}</td>
                <td>{mark.maths_marks}</td>
                <td>{mark.physics_marks}</td>
                <td>{mark.chemistry_marks}</td>
                <td>{mark.total_marks}</td>
                <td>{mark.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  marks: state.marks.marks,
});

export default connect(mapStateToProps, { getMarks })(Leaderboard);
