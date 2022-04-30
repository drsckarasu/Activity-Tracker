/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ActivitiesReducer from './ActivitiesReducer';

const initialState = {
  activities: [],
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ActivitiesReducer, initialState);

  async function getActivities() {
    try {
      const res = await axios.get('/api/v1/activities');

      dispatch({
        type: 'GET_ACTIVITIES',
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function addActivity(activity) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/v1/activities', activity, config);

      dispatch({
        type: 'ADD_ACTIVITY',
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalContext.Provider value={{
      activities: state.activities,
      loading: state.loading,
      getActivities,
      addActivity,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.object,
};

GlobalProvider.defaultProps = {
  children: {},
};
