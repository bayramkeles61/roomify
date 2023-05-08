import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../Button'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Status = () => {
  return (
    <View style={styles.container}>
      <View style={styles.roomWrapper}>
        <Text style={styles.room}>{'Conference Room A'}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 25 }}>
        <MaterialIcons name="computer" size={35} color={Colors.LIGHT_GREY2} />
        <Text style={styles.title}>Product Roadmap Q4</Text>
      </View>
      <Text style={[styles.status, { color: Colors.SECONDARY_RED }]}>In Use</Text>
      <Text style={styles.info}>
        <Text style={{ color: Colors.LIGHT_YELLOW }}>Available </Text>for
      </Text>
      <Text style={[styles.info]}>1 hour 30 minutes</Text>
      <View style={{ flexDirection: 'row', marginTop: 25 }}>
        <Button
          text="End now"
          color={Colors.SECONDARY_RED}
          size={18}
          icon="highlight-off"
          onPress={() => console.log('edit')}
        />
        <Button
          text="Extend"
          color={Colors.SECONDARY_GREEN}
          size={18}
          icon="more-time"
          onPress={() => console.log('sign out')}
        />
        <Button text="60 min" size={20} onPress={() => console.log('sign out')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '60%'
  },
  roomWrapper: {
    backgroundColor: 'rgba(255,0,0,0.7)',
    alignSelf: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  room: {
    fontSize: 40,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.SECONDARY_WHITE,
    marginHorizontal: 25,
    paddingVertical: 5
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.LIGHT_GREY2,
    marginLeft: 10
  },
  status: {
    fontSize: 80,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.SECONDARY_RED
  },
  info: {
    fontSize: 48,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.LIGHT_YELLOW
  }
})
export default Status
