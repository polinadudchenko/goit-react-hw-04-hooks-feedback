import PropTypes from 'prop-types';
import { generate } from 'shortid';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  onCountTotal,
  onCountPositive,
}) {
  return (
    <div className={s.statistics}>
      <ul className={s.statistics__list}>
        <li key={generate()} className={s.statistics__item}>
          good: {good}
        </li>
        <li key={generate()} className={s.statistics__item}>
          neutral: {neutral}
        </li>
        <li key={generate()} className={s.statistics__item}>
          bad: {bad}
        </li>
        <li key={generate()} className={s.statistics__item}>
          Total: {onCountTotal()}
        </li>
        <li key={generate()} className={s.statistics__item}>
          Positive Feedback: {onCountPositive()}%
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onCountPositive: PropTypes.func.isRequired,
  onCountTotal: PropTypes.func.isRequired,
};
