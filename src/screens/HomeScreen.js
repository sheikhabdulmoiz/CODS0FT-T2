import {View, Text, StyleSheet, TextInput} from 'react-native';
import Header from '../components/Header';
import DateView from '../components/DateView';
import {SafeAreaView} from 'react-native-safe-area-context';
import Quote from '../components/Quote';
import {useEffect, useState, useContext, useLayoutEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoritesContext} from '../../store/favorites-context';
import FavoritesContextProvider from '../../store/favorites-context';
import Clipboard from '@react-native-clipboard/clipboard';
import Share from 'react-native-share';



//CODSOFT INTERNSHIPP
//CODSOFT INTERNSHIPP

//www.linkedin.com/in/sheikhabdulmoiz
//www.linkedin.com/in/sheikhabdulmoiz

//TASK 02:QUOTE-APP
//TASK 02:QUOTE-APP



function HomeScreen() {
  const [todaysQuote, setTodaysQuote] = useState([]);
  const [quotesData, setQuotesData] = useState([]);
  const [dataLoading, setDataLoadong] = useState(true);

  const [isFav, setIsFav] = useState(false);
  const [icon, setIcon] = useState('heart-outlined');
  const FavoritesCtxReference = useContext(FavoritesContext);

 
  
  async function shareToOtherHandler() {
    Clipboard.setString(`${todaysQuote[0].content}  ~${todaysQuote[0].author}`);
    Share.open({
      message: await Clipboard.getString(),
    })
      .then(res => console.log('Shared successfully'))
      .catch(err => console.log('Error sharing:', err));
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
    console.log('clearAll.');
  };

  getFavoritesfromStorage = async () => {
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

  async function getQuotes() {
    const response = await fetch(
      // 'https://api.quotable.io/quotes/random?minLength=139&maxLength=140',
      'https://api.quotable.io/quotes/random?minLength=60',
    );
    const res = await response.json();
    // return [{id: res[0]._id, author: res[0].author, content: res[0].content}];
    return [
      {
        id: `${res[0]._id}${Math.random()}`,
        author: res[0].author,
        content: res[0].content,
      },
    ];
  }

  useEffect(() => {
    getQuotes()
      .then(quote => setTodaysQuote(quote))
      .finally(() => setDataLoadong(false));
    getFavoritesfromStorage().then(quotes => setQuotesData(quotes));
    // getFavoritesfromStorage().then(quotes => console.log(quotes))
    // clearAll();
  }, []);

  // function favoritesHandler() {
  //   console.log(FavoritesCtxReference.resetIcon);
  // }

  useLayoutEffect(() => {
    if (FavoritesCtxReference.resetIcon) {
      console.log('icon useEffect');
      setIcon(FavoritesCtxReference.resetIcon);
      setIsFav(false);
    }
  }, [
    FavoritesCtxReference.resetIconHandler,
    FavoritesCtxReference.resetIcon,
    FavoritesContext,
    FavoritesContextProvider,
  ]);

  async function favoritesHandler() {
    if (isFav === false && icon === 'heart-outlined') {
      try {
        favorite = {
          id: todaysQuote[0].id,
          content: todaysQuote[0].content,
          author: todaysQuote[0].author,
        };
        if (quotesData) {
          allFavorites = [...quotesData, favorite];
          // console.log(allFavorites);
          await AsyncStorage.setItem('favorites', JSON.stringify(allFavorites));
          FavoritesCtxReference.addFavorites(allFavorites);
        } else {
          allFavorites = [favorite];
          // console.log(allFavorites);
          await AsyncStorage.setItem('favorites', JSON.stringify(allFavorites));
          FavoritesCtxReference.addFavorites(allFavorites);
        }

        console.log('needed');
        setIcon('heart');
        setIsFav(true);
      } catch (e) {
        console.log('Error in set Favorite!');
      }
    }
    // else {
    else if (isFav === true && icon === 'heart') {
      const updatedFavorites = quotesData?.filter(
        quote => quote.id !== todaysQuote[0].id,
      );
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      FavoritesCtxReference.addFavorites(allFavorites);
      setIcon('heart-outlined');
      setIsFav(false);
    }
  }

  const header = (
    <Header
      onPress={favoritesHandler}
      isFav={isFav}
      icon={icon}
      onCopyPress={shareToOtherHandler}
    />
  );

  return (
    // <SafeAreaView style={{flex: 1}}>
    <View style={styles.rootContainer}>
      {header}
      <TextInput />
      <DateView />
      {dataLoading ? (
        <Text
          style={{
            // backgroundColor: 'red',
            textAlign: 'center',
            color: '#F24806',
            marginTop: 80,
            fontSize: 18,
            fontFamily: 'BadScript-Regular',
          }}>
          Loading
        </Text>
      ) : (
        <>
          <Quote todaysQuote={todaysQuote} />
        </>
      )}
    </View>
    // </SafeAreaView>
  );
  r;
}
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    position: 'relative',
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});

// console.log(todaysQuote[0].id);
// console.log(todaysQuote[0].content);
// console.log(todaysQuote[0].author);
// favorite = {
//   id: todaysQuote[0].id,
//   content: todaysQuote[0].content,
//   author: todaysQuote[0].author,
// };
// const allFavorites = [favorite];
// console.log(allFavorites);
// console.log(todaysQuote);

// const isMatch = quotesData?.some(quote => quote?.id === todaysQuote[0]?.id);
// console.log(isMatch);

// if (isMatch) {
//   setIsFav(true);
// } else {
//   setIsFav(false);
// }

// console.log(favorite);
// console.log(quotesData);

// console.log(todaysQuote[0].id + ' ...');
// let favoritesQuotesIds =
// let isFavorite = quotesData.filter((quote)=>quote.id())
// const isMatch = quotesData.some(quote => quote.id === todaysQuote[0]?.id );
// console.log(isMatch);
// console.log("222222222222222222222222222222222222222222222222222222222222222");
// console.log(todaysQuote[0].id+"------");
// quotesData.forEach(quote => console.log(quote.id+"+++"));
// console.log("222222222222222222222222222222222222222222222222222222222222222");

// const isFavorite = quotesData.
 // const copyToClipboard = () => {
  //   Clipboard.setString(`${todaysQuote[0].content}  ~${todaysQuote[0].author}`);
  // };