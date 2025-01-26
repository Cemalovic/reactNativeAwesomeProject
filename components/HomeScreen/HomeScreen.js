import {useContext} from 'react';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext';

const HomeScreen = () => {
  const isDarkMode = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? '#222' : '#fff',
        marginVertical: 15,
      }}>
      <Text style={{color: isDarkMode ? '#fff' : '#000'}}>
        Welcome to my application
      </Text>
    </View>
  );
};

export default HomeScreen;
