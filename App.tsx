import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import Menu from './screens/menu';
import Spheres from './screens/spheres';
import ListNavigate from './screens/list-navigate';
import ObjectDetail from './screens/object-detail';
import Compilation from './screens/compilation';
import Tops from './screens/tops';
import ListPost from './screens/list-post';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListNavigate} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Spheres" component={Spheres} />
      <Stack.Screen name="ObjectDetail" component={ObjectDetail} />
      <Stack.Screen name="Compilation" component={Compilation} />
      <Stack.Screen name="Tops" component={Tops} />
      <Stack.Screen name="ListPost" component={ListPost} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
