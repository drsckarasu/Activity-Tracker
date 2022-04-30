import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ActivitiesList from '../list/activitiesList';
import TotalData from '../data/totalData';
import LongestData from '../data/longestData';
import './section.scss';

const Section = () => {
  const { getActivities } = useContext(GlobalContext);

  useEffect(() => {
    getActivities();
  }, []);
  return (
    <div className="section">
      <ActivitiesList className="section-list" />
      <div className="aside">
        <LongestData />
        <TotalData />
      </div>
    </div>
  );
};

export default Section;
