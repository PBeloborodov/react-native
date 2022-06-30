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
import CreateSphere from './screens/create-sphere';
import CreateSphereWithoutStatus from './screens/create-sphere-without-status';
import CreateParentProperty from './screens/create-parent-property';
import AddMenu from './screens/add-menu';
import Gellary from './screens/gellary';

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
      <Stack.Screen name="CreateSphere" component={CreateSphere} />
      <Stack.Screen
        name="CreateSphereWithoutStatus"
        component={CreateSphereWithoutStatus}
      />
      <Stack.Screen
        name="CreateParentProperty"
        component={CreateParentProperty}
      />
      <Stack.Screen name="AddMenu" component={AddMenu} />
      <Stack.Screen name="Gellary" component={Gellary} />
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
