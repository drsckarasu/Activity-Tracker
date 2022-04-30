import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './activitiesList.scss';
import Activity from './activity';

const ActivitiesList = () => {
  const { activities } = useContext(GlobalContext);
  return (
    <div className="list">
      {[...activities]
        .reverse()
        .map((item) => (
          <Activity
            // eslint-disable-next-line react/jsx-props-no-multi-spaces
            // eslint-disable-next-line no-underscore-dangle
            key={item._id}
            item={item}
          />
        ))}
    </div>
  );
};

export default ActivitiesList;
