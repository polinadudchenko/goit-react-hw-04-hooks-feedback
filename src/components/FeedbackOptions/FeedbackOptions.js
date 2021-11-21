import PropTypes from 'prop-types';
import { generate } from 'shortid';
import s from './FeedbackOptions.module.css';

export default function Buttons({ onIncrement }) {
  return (
    <div className={s.options}>
      <button
        key={generate()}
        onClick={onIncrement}
        className={s.options__button}
      >
        good
      </button>
      <button
        key={generate()}
        onClick={onIncrement}
        className={s.options__button}
      >
        neutral
      </button>
      <button
        key={generate()}
        onClick={onIncrement}
        className={s.options__button}
      >
        bad
      </button>
    </div>
  );
}

Buttons.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};
