import s from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={s.list}>
      <li>Good: {feedback.good ?? 0}</li>
      <li>Neutral: {feedback.neutral ?? 0}</li>
      <li>Bad: {feedback.bad ?? 0}</li>
      <li>Total: {totalFeedback ?? 0}</li>
      <li>Positive: {positiveFeedback ?? 0}%</li>
    </ul>
  );
};

export default Feedback;
