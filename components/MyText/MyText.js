import {Text} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

const MyText = ({name, onPress}) => {
  const handleTextClick = () => {
    onPress();
    alert('You just pressed the text component');
  };

  return (
    <>
      <Text style={style.text} onPress={handleTextClick}>
        Hello, {name}!
      </Text>

      <Item name="Desk" price={15} />
    </>
  );
};

MyText.proptypes = {
  name: PropTypes.string.isRequired,
};

export default MyText;
