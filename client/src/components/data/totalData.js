import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './totalData.scss';

const TotalData = () => {
  const { activities } = useContext(GlobalContext);
  const rideActivities = activities
    .filter((activity) => activity.typeActivity === 'Ride')
    .map((elem) => elem.distance);
  const runActivities = activities
    .filter((activity) => activity.typeActivity === 'Run')
    .map((elem) => elem.distance);
  const totalRide = rideActivities?.reduce((acc, item) => (+acc + +item), 0);
  const totalRun = runActivities?.reduce((acc, item) => (+acc + +item), 0);
  return (
    <div className="total-data">
      <div>
        <h4>Total ride distance:</h4>
        <p>{`${totalRide % 1 ? totalRide.toFixed(1) : totalRide} km`}</p>
      </div>
      <div>
        <h4>Total run distance:</h4>
        <p>{`${totalRun % 1 ? totalRun.toFixed(1) : totalRun} km`}</p>
      </div>
    </div>
  );
};

export default TotalData;
