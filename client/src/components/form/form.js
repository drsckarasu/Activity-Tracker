import { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './form.scss';

const Form = () => {
  const [startTime, setStartTime] = useState('');
  const [finishTime, setFinishTime] = useState('');
  const [distance, setDistance] = useState('');
  const [typeActivity, setTypeActivity] = useState('');

  const { addActivity } = useContext(GlobalContext);

  const startTimeHandler = (e) => {
    setStartTime(e.target.value);
  };

  const finishTimeHandler = (e) => {
    setFinishTime(e.target.value);
  };

  const distanceHandler = (e) => {
    setDistance(e.target.value);
  };

  const typeActivityHandler = (e) => {
    setTypeActivity(e.target.value);
  };

  const submitActivityHandler = (e) => {
    e.preventDefault();

    const isValidStartTime = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(startTime);
    const isValidFinishTime = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(finishTime);
    if (!startTime || !finishTime || !distance || !typeActivity) {
      alert('Please past all data to empty inputs');
    } else if (!isValidStartTime || !isValidFinishTime) {
      alert('Time must be in correct format HH:MM in the range 00:00 - 23:59');
    } else if (startTime >= finishTime) {
      alert('Finish time must be later than start time');
    } else if (Number.isNaN(parseInt(distance, 10))) {
      alert('Distance must be in number');
    } else {
      const newActivity = {
        startTime,
        finishTime,
        distance,
        typeActivity,
      };
      addActivity(newActivity);
      setStartTime('');
      setFinishTime('');
      setDistance('');
      setTypeActivity('');
    }
  };

  return (
    <div className="add-activity">
      <h3>Add new activity:</h3>

      <form className="add-activity_form" onSubmit={submitActivityHandler}>
        <input className="start-time activity-input" placeholder="Start time" value={startTime} onChange={startTimeHandler} />
        <input className="finish-time activity-input" placeholder="Finish time" value={finishTime} onChange={finishTimeHandler} />
        <input className="distance activity-input" placeholder="Distance" value={distance} onChange={distanceHandler} />
        <select className="activity-type activity-input" value={typeActivity} onChange={typeActivityHandler}>
          <option value="">Select activity type</option>
          <option value="Run">Run</option>
          <option value="Ride">Ride</option>
        </select>
        <button type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
