import PropTypes from 'prop-types';
import './activity.scss';

const Activity = ({ item }) => {
  const {
    startTime, finishTime, distance, typeActivity, createdAt,
  } = item;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = `${months[new Date(createdAt).getMonth()]} ${new Date(createdAt).getDate()}`;
  const dis = `${parseFloat(distance, 10) % 1 ? parseFloat(distance, 10).toFixed(1) : parseFloat(distance, 10)} km`;
  const minsDiff = (+finishTime.split(':')[0] * 60 + +finishTime.split(':')[1]) - (+startTime.split(':')[0] * 60 + +startTime.split(':')[1]);
  let time = '';
  if (minsDiff >= 60) {
    time = `${Math.floor(minsDiff / 60)} h ${minsDiff - Math.floor(minsDiff / 60) * 60} m`;
  } else {
    time = `${minsDiff} minutes`;
  }
  const speed = `${((distance / minsDiff) * 60) % 1 ? ((distance / minsDiff) * 60).toFixed(1) : ((distance / minsDiff) * 60)} km / hour`;
  return (
    <div className="activity">
      <p>{date}</p>
      <p>{dis}</p>
      <p>{typeActivity}</p>
      <p>{time}</p>
      <p>{speed}</p>
    </div>
  );
};

export default Activity;

Activity.propTypes = {
  item: PropTypes.object,
};

Activity.defaultProps = {
  item: {},
};
