import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// components
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import WelcomeScreen from './components/WelcomeScreen';
import Error from './components/Error.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcomeScreen">
        <Stack.Screen
          name="welcomeScreen"
          component={WelcomeScreen}
          options={{statusBarHidden: false, headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{statusBarHidden: false, headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{statusBarHidden: false, headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{statusBarHidden: false, headerShown: false}}
        />
        <Stack.Screen
          name="error"
          component={Error}
          options={{statusBarHidden: false, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
