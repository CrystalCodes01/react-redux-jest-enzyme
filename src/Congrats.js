import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react Component for congrats message
 * @function
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered Component (or null if success prop)
 */


const Congrats = (props) => {
    if (props.success) {
      return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congrats! You guessed the secret word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
