import React, { useState, useMemo } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const bmi = useMemo(() => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  }, [weight, height]);

  const category = useMemo(() => {
    const value = parseFloat(bmi);
    if (value < 18.5) return 'Underweight';
    else if (value >= 18.5 && value < 24.9) return 'Normal weight';
    else if (value >= 25 && value < 29.9) return 'Overweight';
    else return 'Obese';
  }, [bmi]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} kg</p>
        <input
          className='input-slider'
          type='range'
          step='1'
          min='40'
          max='200'
          value={weight}
          onChange={onWeightChange}
        />
        <p className='slider-output'>Height: {height} cm</p>
        <input
          className='input-slider'
          type='range'
          min='140'
          max='220'
          value={height}
          onChange={onHeightChange}
        />
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{bmi}</p>
        <p className='category'>Category: {category}</p>
      </div>
    </main>
  );
}

export default App;
