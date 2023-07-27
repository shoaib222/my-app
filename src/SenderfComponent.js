import React, { useState } from 'react';

const SenderComponent = ({ onUpdate }) => {
  const [myValue, setMyValue] = useState('Initial Value');

  const handleClick = () => {
    const updatedValue = `Updated at ${new Date().toLocaleTimeString()}`;
    setMyValue(updatedValue);
    onUpdate(updatedValue);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Sender Component</h5>
        <p>Value: {myValue}</p>
        <button className="btn btn-primary" onClick={handleClick}>
          Update Value
        </button>
      </div>
    </div>
  );
};

export default SenderComponent;