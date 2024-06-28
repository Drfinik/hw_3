import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    setCelsius(celsiusValue.toFixed(2));
  };

  return (
    <div className='input-form'>
      <TextField
        label="Цельсий"
        value={celsius}
        onChange={handleCelsiusChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Фаренгейт"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Конвертировать
      </Button>
    </div>
  );
};

export default TemperatureConverter;