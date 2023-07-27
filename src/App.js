import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SenderComponent from './SenderfComponent';
import ReceiverComponent from './ReceiverComponent';

const App = () => {
  const [updatedValue, setUpdatedValue] = useState('');

  const handleValueUpdate = (value) => {
    setUpdatedValue(value);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <SenderComponent onUpdate={handleValueUpdate} />
        </div>
        <div className="col-md-6">
          <ReceiverComponent value={updatedValue} />
        </div>
      </div>
    </div>
  );
};

export default App;