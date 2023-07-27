import React from 'react';

const ReceiverComponent = ({ value }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Receiver Component</h5>
        <p>Value from SenderComponent: {value}</p>
      </div>
    </div>
  );
};

export default ReceiverComponent;