import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import GlobalStyle from '../styles/GlobalStyle';

function Login({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor={'#272c42'} />
        <View style={[Style.container, {width: '100%'}]}>
          {/* top logo */}
          <View style={Style.topPart}>
            <Text style={Style.topPartTextStyle}>
              <Text style={{color: '#e79156'}}>Mir</Text>zaban
            </Text>
          </View>

          {/* form */}
          <View
            style={{
              width: '95%',
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '100%'}}>
              {/* heading */}
              <View
                style={{
                  width: '100%',
                  marginVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{width: '95%'}}>
                  <View
                    style={{
                      width: 40,
                      height: 3,
                      backgroundColor: '#e79156',
                      borderRadius: 10,
                      marginVertical: 15,
                    }}></View>
                  <Text
                    style={{color: '#eee', fontSize: 35, fontWeight: 'bold'}}>
                    Login
                  </Text>
                </View>
              </View>

              {/* Form Content */}
              <View>
                <TextInput
                  style={[GlobalStyle.inputStyle, Style.textArea]}
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor={'#b0b1ba'}
                />

                <TextInput
                  style={[GlobalStyle.inputStyle, Style.textArea]}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor={'#b0b1ba'}
                />

                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 35,
                  }}>
                  <TouchableOpacity
                    style={Style.button}
                    onPress={() => navigation.navigate('home')}>
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
              </View>

              {/* extera info */}
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#b0b1ba',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  If you have not yet an already account ?{' '}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('signup')}>
                    <Text style={{color: '#e79156', fontWeight: 'bold'}}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          onTouchStart={() => navigation.navigate('welcomeScreen')}
          style={{
            width: 100,
            height: 100,
            borderTopRightRadius: 150,
            backgroundColor: '#eee',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: '#272c42',
              fontSize: 17,
              fontWeight: 'bold',
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <Text style={{paddingVertical: 10}}>{' < '}</Text> Back
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: '#272c42',
    padding: 15,
    borderBottomLeftRadius: 70,
  },
  topPart: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  topPartTextStyle: {
    color: '#eee',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textArea: {
    borderBottomColor: '#b0b1ba',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderRadius: 0,
    color: '#b0b1ba',
    paddingHorizontal: 0,
    fontSize: 15,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#272c42',
  },
});

export default Login;
