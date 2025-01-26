import {useContext} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../contexts/ThemeContext';

const Item = ({name, price}) => {
  const isDarkMode = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? '#222222' : '#ffffff',
        marginVertical: 5,
      }}>
      <Text
        style={{
          color: isDarkMode ? '#ffffff' : '#222222',
          textAlign: 'center',
        }}>
        {`Inside MyText component we have Item component with properties ${name} that costs ${price}$.`}
      </Text>
    </View>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
