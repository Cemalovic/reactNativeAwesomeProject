import {useEffect, useRef, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MyText from './components/MyText/MyText';
import {ThemeContext} from './contexts/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';
import useToggle from './customHooks/useToggle';
import TimeOfDay from './components/TimeOfDay/TimeOfDay';

const App = () => {
  let array = Array(150).fill(0);

  const [text, setText] = useState('Milos');

  useEffect(() => {
    console.log('Text is changed!!!');
  }, [text]);

  const changeName = () => {
    setText('Pera');
  };

  const scrollViewRef = useRef(null);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  };

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const [isDarkMode, setIsDarkMode] = useToggle(false); // <-- custom hook

  const [imageSource, setImageSource] = useState({uri: 'http://example.com'});

  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />

        <Button title={'Switch Theme'} onPress={setIsDarkMode} />

        <ScrollView
          ref={scrollViewRef}
          style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={() => {
              console.log('We are now scrolling');
            }}>
            <Image
              source={imageSource}
              style={{width: 100, height: 100, backgroundColor: 'red'}}
              resizeMode={'contain'}
              onError={() => {
                console.log('Error has been detected while loading the image');
                setImageSource(require('./assets/images/cake.png'));
              }}
            />

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
              }}
              style={{width: 100, height: 100, marginVertical: 5}}
            />

            <Image
              source={imageSource}
              style={{width: 100, height: 100, backgroundColor: 'red'}}
              resizeMode={'contain'}
              onError={() => {
                console.log('Error has been detected while loading the image');
                setImageSource(require('./assets/images/cake.png'));
              }}
            />

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
              }}
              style={{width: 100, height: 100, marginVertical: 5}}
            />

            <Image
              source={imageSource}
              style={{width: 100, height: 100, backgroundColor: 'red'}}
              resizeMode={'contain'}
              onError={() => {
                console.log('Error has been detected while loading the image');
                setImageSource(require('./assets/images/cake.png'));
              }}
            />

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
              }}
              style={{width: 100, height: 100, marginVertical: 5}}
            />

            <Image
              source={imageSource}
              style={{width: 100, height: 100, backgroundColor: 'red'}}
              resizeMode={'contain'}
              onError={() => {
                console.log('Error has been detected while loading the image');
                setImageSource(require('./assets/images/cake.png'));
              }}
            />

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
              }}
              style={{width: 100, height: 100, marginVertical: 5}}
            />
          </ScrollView>

          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              value={shouldKeepLoggedIn}
              onValueChange={value => {
                setShouldKeepLoggedIn(value);
              }}
            />

            <Text>Keep me logged in</Text>
          </View>

          {/* Text Input Field */}
          <TextInput
            style={{
              borderWidth: 1,
              marginHorizontal: 15,
              borderRadius: 4,
              padding: 10,
            }}
            value={textValue}
            onChangeText={value => {
              console.log(value);
              setTextValue(value);
            }}
            placeholder={'Please enter your name'}
            autoFocus={true}
          />

          {/* Email Input Field */}
          <TextInput
            style={{
              borderWidth: 1,
              marginHorizontal: 15,
              borderRadius: 4,
              padding: 10,
            }}
            value={emailValue}
            onChangeText={value => {
              console.log(value);
              setEmailValue(value);
            }}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            placeholder={'Please enter your email'}
          />

          {/* Password Input Field */}
          <TextInput
            style={{
              borderWidth: 1,
              marginHorizontal: 15,
              borderRadius: 4,
              padding: 10,
            }}
            value={passwordValue}
            onChangeText={value => {
              console.log(value);
              setPasswordValue(value);
            }}
            placeholder={'Please enter your password'}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={[
              {backgroundColor: 'black'},
              (emailValue.length === 0 || passwordValue.length < 8) && {
                opacity: 0.5,
              },
            ]}
            disabled={emailValue.length === 0 || passwordValue.length < 8}
            onPress={() => {
              console.log(
                textValue,
                emailValue,
                passwordValue,
                shouldKeepLoggedIn,
              );
            }}>
            <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
              Submit
            </Text>
          </TouchableOpacity>

          {array.map((value, index) => (
            <Text
              key={index}
              style={{color: isDarkMode ? '#ffffff' : '#222222'}}>
              Hello World {index}!
            </Text>
          ))}

          <TimeOfDay />

          <MyText name={text} onPress={changeName} />

          <View style={{backgroundColor: isDarkMode ? '#222' : '#fff'}}>
            <Text
              style={{
                color: isDarkMode ? '#ffffff' : '#222222',
                marginVertical: 15,
              }}>
              Hello World 2!
            </Text>
          </View>

          <Button title="Scroll to top" onPress={handleClick} />
        </ScrollView>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
