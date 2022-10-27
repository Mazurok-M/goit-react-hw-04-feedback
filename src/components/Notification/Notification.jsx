import PropTypes from 'prop-types';
import css from './notification.module.css';

const Notification = ({ message }) => (
  <div className={css.message}>{message}</div>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
