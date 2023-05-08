import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <MaterialCommunityIcons name="orbit" size={40} color={Colors.DEFAULT_WHITE} />
        <Text style={styles.title}>Room</Text>
        <Text style={{ color: Colors.DEFAULT_RED, fontSize: 40, fontFamily: Fonts.POPPINS_BOLD }}>ify</Text>
      </View>
      <View style={styles.dateContiner}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>11 : 04</Text>
          <Text style={styles.meridiem}>AM</Text>
        </View>
        <Text style={styles.date}>Monday, 25th April</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 30,
    paddingVertical: 25
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    paddingLeft: 5,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_WHITE,
    fontSize: 40
  },
  dateContiner: {
    paddingHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  time: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 30,
    fontFamily: Fonts.POPPINS_BOLD,
    marginRight: 5
  },
  meridiem: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 20,
    fontFamily: Fonts.POPPINS_BOLD
  },
  date: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 20
  }
})
export default Header
