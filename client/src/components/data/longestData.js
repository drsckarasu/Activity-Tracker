import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './longestData.scss';

const ActivitiesList = () => {
  const { activities } = useContext(GlobalContext);
  const rideActivities = activities.filter((activity) => activity.typeActivity === 'Ride').sort((b, a) => a.distance - b.distance);
  const runActivities = activities.filter((activity) => activity.typeActivity === 'Run').sort((b, a) => a.distance - b.distance);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateRide = `${months[new Date(rideActivities[0]?.createdAt).getMonth()]} ${new Date(rideActivities[0]?.createdAt).getDate()}`;
  const disRide = `${parseFloat(rideActivities[0]?.distance, 10) % 1 ? parseFloat(rideActivities[0]?.distance, 10).toFixed(1) : parseFloat(rideActivities[0]?.distance, 10)} km`;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const minsDiffRide = (+rideActivities[0]?.finishTime.split(':')[0] * 60 + +rideActivities[0]?.finishTime.split(':')[1]) - (+rideActivities[0]?.startTime.split(':')[0] * 60 + +rideActivities[0]?.startTime.split(':')[1]);
  let timeRide = '';
  if (minsDiffRide >= 60) {
    timeRide = `${Math.floor(minsDiffRide / 60)} h ${minsDiffRide - Math.floor(minsDiffRide / 60) * 60} m`;
  } else {
    timeRide = `${minsDiffRide} m`;
  }
  const dateRun = `${months[new Date(runActivities[0]?.createdAt).getMonth()]} ${new Date(runActivities[0]?.createdAt).getDate()}`;
  const disRun = `${parseFloat(runActivities[0]?.distance, 10) % 1 ? parseFloat(runActivities[0]?.distance, 10).toFixed(1) : parseFloat(runActivities[0]?.distance, 10)} km`;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const minsDiffRun = (+runActivities[0]?.finishTime.split(':')[0] * 60 + +runActivities[0]?.finishTime.split(':')[1]) - (+runActivities[0]?.startTime.split(':')[0] * 60 + +runActivities[0]?.startTime.split(':')[1]);
  let timeRun = '';
  if (minsDiffRun >= 60) {
    timeRun = `${Math.floor(minsDiffRun / 60)} h ${minsDiffRun - Math.floor(minsDiffRun / 60) * 60} m`;
  } else {
    timeRun = `${minsDiffRun} m`;
  }
  return (
    <div className="longest-data">
      <div>
        <h3>Longest ride:</h3>
        <div className="longest-data_info">
          <p>{dateRide}</p>
          <p>{disRide}</p>
          <p>{timeRide}</p>
        </div>
      </div>
      <div>
        <h3>Longest run:</h3>
        <div className="longest-data_info">
          <p>{dateRun}</p>
          <p>{disRun}</p>
          <p>{timeRun}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesList;
