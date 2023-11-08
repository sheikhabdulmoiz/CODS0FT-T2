import {View, Text, StyleSheet} from 'react-native';
function DateView() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  return (
    <View style={styles.rootContainer}>
      <View style={styles.monthContainer}>
        <Text style={styles.month}>{month.slice(0, 3)}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{`0${date}`}</Text>
      </View>
    </View>
  );
}
export default DateView;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 72,
    width: '100%',
    // backgroundColor: 'peru',
    alignItems: 'center',
  },
  monthContainer: {
    // borderCurve:"circular",
    // backgroundColor: 'green',
    // alignItems:"center",
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  dateContainer: {
    // backgroundColor: 'limegreen',
    // alignItems:"center",
    borderTopWidth: .8,
    borderTopColor: '#F24806',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  month: {
    fontSize: 20,
    color: '#F24806',
    fontFamily: 'RobotoSlab-ExtraLight',
},
date: {
    fontSize: 32,
    color: '#F24806',
    fontFamily: 'RobotoSlab-Light',
  },
});
