import React, { Component } from 'react';

/**
 * Functional react Component for congrats message
 * @function
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered Component (or null if success prop)
 */


export default (props) => {
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
}
