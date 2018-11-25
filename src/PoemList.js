import React from 'react';
import PropTypes from 'prop-types';

import Poem from './Poem';

const PoemList = props =>
  <ul>
    {props.poems
      .filter(poem => !props.isFiltered || poem.isConfirmed)
      .map((guest, index) =>
        <Poem
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmationAt(index)}
          handeToggleEditing={() => props.toggleEditingAt(index)}
          setName={text => props.setNameAt(text, index)}
          handleRemove={() => props.removeGuestAt(index)} />
      )}
  </ul>;

PoemList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default PoemList;
