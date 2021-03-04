import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="container" style={{ textAlign: 'center', margin: '0px auto' }}>
      <h1 style={{ fontWeight: '900' }}>Marks Manager</h1>
      <h3>
        It is an application to manage and compare marks of students. You can{' '}
        <strong>add marks</strong> of students as well as see the{' '}
        <strong>leaderboard of marks</strong> of students
      </h3>
      <br />
      <p>
        Want to Add Marks? Click Here!
        <br />
        <Link to={'/marks'}>
          <button type="button" className="btn btn-success">
            Add Marks
          </button>
        </Link>
      </p>
      <br />
      <p>
        Want to see the leaderboard? Click Here!
        <br />
        <Link to={'/leaderboard'}>
          <button type="button" className="btn btn-warning">
            Show Leaderboard
          </button>
        </Link>
      </p>
    </div>
  );
}
