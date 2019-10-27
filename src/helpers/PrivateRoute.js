import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => 
        !!auth.uid ? (
          <Component {...props} />
        ) : (
          <Redirect to='/signin' />
        )
      }
    />
  )
}

export default PrivateRoute;