import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={Style.container}>
        {/* top logo */}
        <View style={{marginBottom: 10}}>
          <Text style={Style.topPartTextStyle}>
            <Text style={{color: '#e79156'}}>Mir</Text>zaban
          </Text>
        </View>

        {/* login */}
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <TouchableOpacity
            style={[Style.button, {backgroundColor: '#fff'}]}
            onPress={() => navigation.navigate('login')}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: '#272c42',
              }}>
              login
            </Text>
          </TouchableOpacity>
        </View>

        {/* sign up */}
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <TouchableOpacity
            style={Style.button}
            onPress={() => navigation.navigate('signup')}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: '#272c42',
              }}>
              sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272c42',
  },
  topPartTextStyle: {
    color: '#eee',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bec1cd',
    color: '#272c42',
  },
});

export default WelcomeScreen;
