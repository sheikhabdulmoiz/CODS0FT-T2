import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {useContext} from 'react';
import {FavoritesContext} from '../../store/favorites-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';
import Share from 'react-native-share';

function FavoritesItem({author, content, id, onResetIcon}) {
  const FavoritesCtxReference = useContext(FavoritesContext);

  async function shareToOtherHandler() {
    Clipboard.setString(`${content}  ~${author}`);
    Share.open({
      message: await Clipboard.getString(),
    })
      .then(res => console.log('Shared successfully'))
      .catch(err => console.log('Error sharing:', err));
  }

  async function DeleteFavoriteHandler() {
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      // console.log(favoritesData);
      if (favoritesData !== null) {
        const allFavorites = JSON.parse(favoritesData);
        const updatedFavorites = allFavorites?.filter(quote => quote.id !== id);
        await AsyncStorage.setItem(
          'favorites',
          JSON.stringify(updatedFavorites),
        );
        FavoritesCtxReference.resetIconHandler('heart-outlined');
        FavoritesCtxReference.addFavorites(allFavorites);
      }
    } catch (e) {
      console.log('Error in delete Favorites');
    }
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.shareHeader}>
        <View style={styles.shareContainer}>
          <TouchableOpacity onPress={DeleteFavoriteHandler}>
            <Fontisto name="heart" size={17} color="#F24806" />
          </TouchableOpacity>
        </View>
        <View style={styles.heartContainer}>
        <TouchableOpacity onPress={shareToOtherHandler}>
          <Entypo name="share" size={17} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{content}</Text>
      </View>
      <View style={styles.lineSeparator}></View>
      <View style={styles.authorContainer}>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}
export default FavoritesItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: 12,
    marginHorizontal: 4,
    // width: '100%',
    backgroundColor: 'white',
    // backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 18,
    elevation: 5,
    overflow: 'hidden',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  shareHeader: {
    // backgroundColor: 'peru',
    flexDirection: 'row',
    width: '50%',
    paddingVertical: 6,
    justifyContent: 'space-evenly',
  },
  shareContainer: {
    // backgroundColor: 'peru',
    // flex:1
  },
  heartContainer: {
    // flex:1
  },
  quoteContainer: {
    // backgroundColor:"red"
  },
  quoteText: {
    minHeight: 70,
    fontSize: 16,
    fontFamily: 'RobotoSlab-SemiBold',
    textAlign: 'center',
    // backgroundColor: 'red',
  },
  lineSeparator: {
    width: 50,
    height: 1,
    marginTop: 32,
    backgroundColor: '#F24806',
  },
  authorContainer: {
    // backgroundColor:"orange",
    marginTop: 32,
  },
  author: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily: 'RobotoSlab-Regular',
  },
});
