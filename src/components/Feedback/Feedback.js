import React, { useState } from 'react';
import s from './Feedback.module.css';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statictics';
import Section from '../Section';
import Notification from '../Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    const option = e.currentTarget.textContent;

    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        alert('Something wrong');
    }
  };

  const countTotalFeedback = () => {
    console.log(good);
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();

    return totalFeedback ? Math.floor((good * 100) / totalFeedback) : 0;
  };

  return (
    <div className={s.feedback}>
      <Section title="Please leave your feedback">
        <FeedbackOptions onIncrement={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onCountTotal={countTotalFeedback}
            onCountPositive={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
