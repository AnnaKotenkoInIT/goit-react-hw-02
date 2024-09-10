import { useState, useEffect } from 'react';

import Description from './components/Definition/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';

import './index.css';

const App = () => {
  const [feedback, setFeedback] = useState(
    () =>
      JSON.parse(localStorage.getItem('saveResults')) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  const updateFeedback = feedbackType =>
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem('saveResults', JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () =>
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
