import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  } else {
    return <Navigate to={'/login'} state={location.pathname} />;
  }
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
