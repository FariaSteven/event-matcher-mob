import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/Login/login';
import Home from './app/Home/home';
import SignUp from './app/SignUp/signUp';
import Talks from './app/Talks/talks';
import Events from './app/Events/events';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{ headerShown: true }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ 
            title: 'Login',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'SignUp', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="Talks"
          component={Talks}
          options={{
            title: 'Talks',
            headerStyle: {
              backgroundColor: '#4D089A',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{
            title: 'Events',
            headerStyle: {
              backgroundColor: '#4D089A',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
