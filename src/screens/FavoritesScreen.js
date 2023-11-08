import {View, Text, StyleSheet, FlatList} from 'react-native';
import FavoritesItem from '../components/FavoritesItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState, useContext} from 'react';
import {FavoritesContext} from '../../store/favorites-context';

function FavoritesScreen() {
  const [allFavorites, setAllFavorites] = useState([]);
  const FavoritesCtxReference = useContext(FavoritesContext);

  const getFavorites = async () => {
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      if (favoritesData !== null) {
        const allFavorites = JSON.parse(favoritesData);
        return allFavorites;
      }
    } catch (e) {
      console.log('Error in load Favorites');
    }
  };

  useEffect(() => {
    getFavorites().then(res => setAllFavorites(res));
  });
  useEffect(() => {
    getFavorites().then(res => setAllFavorites(res));
  }, [FavoritesCtxReference]);

  //   function reFreshFavorites() {
  //     getFavorites().then(res => setAllFavorites(res));
  //   }

  return (
    <View style={styles.container}>
      <FlatList
      
        showsVerticalScrollIndicator={false}
        data={allFavorites}
        renderItem={({item}) => (
          <FavoritesItem
            author={item.author}
            content={item.content}
            id={item.id}
            // onResetIcon={onResetIcon}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: 'white',
  },
});
