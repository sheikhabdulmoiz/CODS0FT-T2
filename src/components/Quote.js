import {View, Text, StyleSheet} from 'react-native';

function Quote({children, todaysQuote}) {
  // console.log(todaysQuote);
  return (
    <View style={styles.rootContainer}>
      <View>
        <Text style={styles.quoteText}>
          {todaysQuote[0].content}
        </Text>
      </View>
      <View style={styles.lineSeparator}></View>
      <View style={styles.authorContainer}>
        <Text style={styles.author}>{todaysQuote[0].author}</Text>
      </View>
    </View>
  );
}
export default Quote;

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    marginTop: 24,
    // backgroundColor: 'plum',
    paddingBottom: 12,
    alignItems: 'center',
  },
  quoteText: {
    minHeight: 70,
    fontSize:20,
    fontFamily: 'BadScript-Regular',
    fontFamily: 'PetitFormalScript-Regular',
    fontFamily: 'KaushanScript-Regular',
    fontFamily: 'RobotoSlab-SemiBold',
    // lineHeight: 32,
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
    fontSize: 16,
    fontFamily: 'RobotoSlab-Regular',
  },
});
