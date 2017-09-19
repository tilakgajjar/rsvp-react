import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>
  <div>
    <h2>Invitees</h2>
    <label>
      <input
        type="checkbox"
        onChange={props.toggleFilter}
        checked={props.isFiltered} />
        {" "}
        Hide those who haven not responded
    </label></div>;

  ConfirmedFilter.PropTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired
  };

export default ConfirmedFilter;
