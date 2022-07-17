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
import ListVideo from './screens/list-video';
import PanelVideo from './screens/panel-video';
import PanelShortPanel from './screens/panel-short-video';
import Favorites from './screens/favorites';
import SearchFavorites from './screens/search-favorites';
import VisitHistory from './screens/visit-history';
import Notice from './screens/notice';
import Inputs from './screens/inputs';
import Chats from './screens/chat-pages/chats';
import NewChat from './screens/chat-pages/new-chat';
import CreateChat from './screens/chat-pages/create-chat';
import Correspondence from './screens/chat-pages/correspondence';
import CorrespondenceMedia from './screens/chat-pages/correspondence-media';
import Profile from './screens/profile/index';
import EditProfile from './screens/profile/edit-profile';
import Frends from './screens/profile/frends';
import Balance from './screens/balance';
import InfoCard from './screens/info-card';
import PostsSlider from './screens/posts-slider/index';
import PageRating from './screens/ratings-page/index';
import {View, Text} from 'react-native';
import HeaderChat from './screens/components/header-chat';

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
      <Stack.Screen name="ListVideo" component={ListVideo} />
      <Stack.Screen name="PanelVideo" component={PanelVideo} />
      <Stack.Screen name="PanelShortPanel" component={PanelShortPanel} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="SearchFavorites" component={SearchFavorites} />
      <Stack.Screen name="VisitHistory" component={VisitHistory} />
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="Inputs" component={Inputs} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="NewChat" component={NewChat} />
      <Stack.Screen name="CreateChat" component={CreateChat} />
      <Stack.Screen name="Correspondence" component={Correspondence} />
      <Stack.Screen
        name="CorrespondenceMedia"
        component={CorrespondenceMedia}
        options={{
          headerTitle: () => <HeaderChat />,
          headerBackTitleVisible: false,
          // headerLeft: () => (
          //   <View style={{marginLeft: 15, marginBottom: 5}}>
          //     <Back />
          //   </View>
          // ),
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Frends" component={Frends} />
      <Stack.Screen name="Balance" component={Balance} />
      <Stack.Screen name="InfoCard" component={InfoCard} />
      <Stack.Screen name="PostsSlider" component={PostsSlider} />
      <Stack.Screen name="PageRating" component={PageRating} />
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
