import React from 'react';
import {Button, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const ListNavigate = ({navigation}) => {
  return (
    <ScrollView style={{marginBottom: 20}}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
      <Button title="Spheres" onPress={() => navigation.navigate('Spheres')} />
      <Button
        title="ObjectDetail"
        onPress={() => navigation.navigate('ObjectDetail')}
      />
      <Button
        title="Compilation"
        onPress={() => navigation.navigate('Compilation')}
      />
      <Button title="Tops" onPress={() => navigation.navigate('Tops')} />
      <Button
        title="ListPost"
        onPress={() => navigation.navigate('ListPost')}
      />
      <Button
        title="CreateSphere"
        onPress={() => navigation.navigate('CreateSphere')}
      />
      <Button
        title="CreateSphereWithoutStatus"
        onPress={() => navigation.navigate('CreateSphereWithoutStatus')}
      />
      <Button
        title="CreateParentProperty"
        onPress={() => navigation.navigate('CreateParentProperty')}
      />
      <Button title="AddMenu" onPress={() => navigation.navigate('AddMenu')} />
      <Button title="Gellary" onPress={() => navigation.navigate('Gellary')} />
      <Button
        title="ListVideo"
        onPress={() => navigation.navigate('ListVideo')}
      />
      <Button
        title="PanelVideo"
        onPress={() => navigation.navigate('PanelVideo')}
      />
      <Button
        title="PanelShortPanel"
        onPress={() => navigation.navigate('PanelShortPanel')}
      />
      <Button
        title="Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
      <Button
        title="SearchFavorites"
        onPress={() => navigation.navigate('SearchFavorites')}
      />
      <Button
        title="VisitHistory"
        onPress={() => navigation.navigate('VisitHistory')}
      />
      <Button title="Notice" onPress={() => navigation.navigate('Notice')} />
      <Button title="Inputs" onPress={() => navigation.navigate('Inputs')} />
      <Button title="Chats" onPress={() => navigation.navigate('Chats')} />
      <Button title="NewChat" onPress={() => navigation.navigate('NewChat')} />
      <Button
        title="CreateChat"
        onPress={() => navigation.navigate('CreateChat')}
      />
      <Button
        title="Correspondence"
        onPress={() => navigation.navigate('Correspondence')}
      />
      <Button
        title="CorrespondenceMedia"
        onPress={() => navigation.navigate('CorrespondenceMedia')}
      />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button
        title="EditProfile"
        onPress={() => navigation.navigate('EditProfile')}
      />
    </ScrollView>
  );
};
export default ListNavigate;
