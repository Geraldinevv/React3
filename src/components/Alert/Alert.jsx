import React from 'react';

const Alert = ({ message, color, type }) => {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {message}
    </div>
  );
};

Alert.defaultProps = {
  color: 'success'
};

export default Alert;