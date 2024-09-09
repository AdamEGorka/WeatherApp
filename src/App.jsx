import { useState } from 'react';


import cloudy from './assets/cloudy.png'
import sunny from './assets/sun.png'
import rainy from './assets/rainy.png'
import snowy from './assets/snow.png'
import cloud from './assets/cloud.png'

import './App.css'


function App() {

  const [selectedDay, setSelectedDay] = useState({
    image: cloudy,
    dayName: 'Monday',
    temperature: '22°C',
    description: 'Cloudy',
  });


  const [animate, setAnimate] = useState(false);

  // clicker handler for the top - so that the top changes when a bottom date is clicked
  const handleDayClick = (image, dayName, temperature, description) => {
    setSelectedDay({ image, dayName, temperature, description });
    setAnimate(true); // Trigger animation

    // (jank way to reset the top icon animation)
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };
  return (
    <div className="App">
      <div className={`top-container ${animate ? 'animate' : ''}`}>
        {/* Day name header */}
        <h2 className="top-day-name">{selectedDay.dayName}</h2>
        
        {/* Weather icon and description */}
        <div className="top-content">
          <img src={selectedDay.image} alt={selectedDay.dayName} className="weather-icon" />
          <div className="top-text-container">
            <p className="top-temperature">{selectedDay.temperature}</p>
            <p className="top-description">{selectedDay.description}</p>
          </div>
        </div>
      </div>
      
      <div className="bottom-container">
        <div 
          className="day-cell" 
          onClick={() => handleDayClick(snowy, 'Monday', '18°F', 'Snowy')}
        >
          <img src={snowy} alt="snowy" className="weather-icon" />
          <p className="day-name">Monday</p>
          <p className="temperature">18°F</p>
        </div>
        <div 
          className="day-cell" 
          onClick={() => handleDayClick(cloudy, 'Tuesday', '70°F', 'Cloudy')}
        >
          <img src={cloudy} alt="cloudy" className="weather-icon" />
          <p className="day-name">Tuesday</p>
          <p className="temperature">70°F</p>
        </div>
        <div 
          className="day-cell" 
          onClick={() => handleDayClick(sunny, 'Wednesday', '92°F', 'Sunny')}
        >
          <img src={sunny} alt="Sunny" className="weather-icon" />
          <p className="day-name">Wednesday</p>
          <p className="temperature">92°F</p>
        </div>
        <div 
          className="day-cell" 
          onClick={() => handleDayClick(rainy, 'Thursday', '60°F', 'Intermittent Showers')}
        >
          <img src={rainy} alt="rainy" className="weather-icon" />
          <p className="day-name">Thursday</p>
          <p className="temperature">60°F</p>
        </div>
        <div 
          className="day-cell" 
          onClick={() => handleDayClick(cloudy, 'Friday', '65°F', 'Cloudy with a chance of rain')}
        >
          <img src={cloudy} alt="cloudy" className="weather-icon" />
          <p className="day-name">Friday</p>
          <p className="temperature">65°F</p>
        </div>
        <div 
          className="day-cell" 
          onClick={() => handleDayClick(sunny, 'Saturday', '62°F', 'Sunny')}
        >
          <img src={sunny} alt="Sunny" className="weather-icon" />
          <p className="day-name">Saturday</p>
          <p className="temperature">62°F</p>
        </div>
        <div 
          className="day-cell" 
          onClick={() => handleDayClick(cloud, 'Sunday', '64°F', 'Cloudy with no sun')}
        >
          <img src={cloud} alt="cloud" className="weather-icon" />
          <p className="day-name">Sunday</p>
          <p className="temperature">64°F</p>
        </div>
      </div>
    </div>
  )
}

export default App
