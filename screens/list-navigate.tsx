import React from 'react';
import {Button, View} from 'react-native';

const ListNavigate = ({navigation}) => {
  return (
    <View>
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
    </View>
  );
};
export default ListNavigate;
