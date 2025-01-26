import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import style from './TimeOfDay.style';

const TimeOfDay = () => {
  const [timeOfDay, setTimeOfDay] = useState('morning');

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setTimeOfDay('morning');
      } else if (hour >= 12 && hour < 17) {
        setTimeOfDay('afternoon');
      } else if (hour >= 17 && hour < 21) {
        setTimeOfDay('evening');
      } else {
        setTimeOfDay('night');
      }

      // Set up an interval to update the time of day every minute
      const intervalId = setInterval(updateTimeOfDay, 60000);

      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    };

    updateTimeOfDay();
  }, []);

  return (
    <View>
      <Text style={style.text}>Good {timeOfDay}!</Text>
    </View>
  );
};

export default TimeOfDay;
