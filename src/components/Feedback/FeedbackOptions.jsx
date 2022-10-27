import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.btn_list}>
    {options.map(option => (
      <li key={option}>
        <button
          className={css.btn}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
