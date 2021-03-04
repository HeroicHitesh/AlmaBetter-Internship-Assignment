import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
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
    const columns = [
      {
        name: 'Roll No',
        selector: 'roll_no',
        sortable: true,
        wrap: true,
      },
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
      },
      {
        name: 'Maths Marks',
        selector: 'maths_marks',
        sortable: true,
      },
      {
        name: 'Physics Marks',
        selector: 'physics_marks',
        sortable: true,
      },
      {
        name: 'Chemistry Marks',
        selector: 'chemistry_marks',
        sortable: true,
      },
      {
        name: 'Total Marks',
        selector: 'total_marks',
        sortable: true,
      },
      {
        name: 'Percentage',
        selector: 'percentage',
        sortable: true,
      },
    ];
    const data = this.props.marks.map((mark) => ({
      roll_no: mark.roll_no,
      name: mark.name,
      maths_marks: mark.maths_marks,
      physics_marks: mark.physics_marks,
      chemistry_marks: mark.chemistry_marks,
      total_marks: mark.total_marks,
      percentage: mark.percentage,
    }));
    return (
      <DataTable
        title="Leaderboard"
        columns={columns}
        data={data}
        highlightOnHover
        defaultSortField={(columns.selector = 'percentage')}
        defaultSortAsc={false}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  marks: state.marks.marks,
});

export default connect(mapStateToProps, { getMarks })(Leaderboard);
