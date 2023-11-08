// import {View, Text, StyleSheet} from 'react-native';

// function Header() {
//   return (
//     <View style={styles.headerContainer}>
//       <View style={styles.nameContainer}>
//         <Text style={styles.nameText}>Hello Steve!</Text>
//       </View>
//       <View style={styles.greetContainer}>
//         <Text style={styles.greetText}>Here, is your Quote of the day</Text>
//       </View>
//     </View>
//   );
// }
// export default Header;
// const styles = StyleSheet.create({
//   headerContainer: {
//     width: '100%',
//     // backgroundColor: 'yellow',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     height: 65,
//   },
//   nameContainer: {
//     // backgroundColor: 'orange',
//   },
//   nameText: {
//     fontFamily: 'RobotoSlab-Bold',
//     fontSize: 24,
//     letterSpacing: 2,
//   },
//   greetContainer: {
//     // backgroundColor: 'tomato',
//   },
//   greetText: {
//     fontFamily: 'RobotoSlab-Medium',
//     fontSize: 16,
//     letterSpacing: 1,
//   },
// });
import {View, Text, StyleSheet, Pressable} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

function Header({onPress, onCopyPress, icon}) {
  console.log(icon);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.commaContainer}>
          <Fontisto name="quote-left" size={22} color="#F24806" />
        </View>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteHead}>Quotes</Text>
        </View>
      </View>
      <View style={styles.shareContainer}>
        <View style={{paddingRight: 16}}>
          <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}>
            <Entypo name={icon} size={24} color="red" />
            {/* <Entypo name={isFav ? "heart" : "heart-outlined"} size={24} color="red" /> */}
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={onCopyPress}
            style={({pressed}) => pressed && styles.pressed}>
            {/* <Entypo name={icon} size={24} color="red" /> */}
            {/* <Entypo name={isFav ? "heart" : "heart-outlined"} size={24} color="red" /> */}
            <Entypo name="share" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    // position:"absolute",
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 4,
    borderBottomColor: '#eadddd',
  },
  commaContainer: {
    justifyContent: 'flex-start',
  },

  leftContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // flex: 0.6,
    justifyContent: 'space-between',
  },
  quoteHead: {
    fontSize: 26,
    fontFamily: 'RobotoSlab-Medium',
    paddingLeft: 8,
  },
  commaText: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 90,
  },
  shareContainer: {
    // flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pressed: {
    opacity: 0.5,
  },
});

{
  /* <View style={styles.leftContainer}>
<View style={styles.commaContainer}>
  <Text style={styles.commaText}>"</Text>
</View>
<View style={styles.nameContainer}>
  <Text style={styles.nameText}>Quotes</Text>
</View>
</View>
<View style={styles.rightContainer}>
<Text style={styles.shareIcon}></Text>
</View> */
}
