import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './GuestList';
import Counter from './Counter';


const MainContent = props =>
  <div className="main">
      <ConfirmedFilter
        toggleFilter = {props.toggleFilter}
        isFiltered = {props.isFiltered}
      />
      <Counter
        totalInvited = {props.totalInvited}
        numberAttending = {props.numberAttending}
        numberUnconfirmed = {props.numberUnconfirmed}/>

      <GuestList
        guests = {props.guests}
        toggleConfirmationAt = {props.toggleConfirmationAt}
        toggleEditiongAt = {props.toggleEditiongAt}
        setNameAt = {props.setNameAt}
        isFiltered = {props.isFiltered}
        removeGuestAt = {props.removeGuestAt}
        pendingGuest = {props.pendingGuest}/>
  </div>;

  MainContent.PropTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    tnumberAttending: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
    totalInvited: PropTypes.number.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditiongAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired


  };
export default MainContent;
