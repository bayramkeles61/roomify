import { FC, useRef, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import colors from '../../theme/colors'
import Blur from '../../components/Blur'
import Separator from '../../components/Separator/Separator'
import Fonts from '../../constants/Fonts'
import Display from '../../utils/Display'
import Colors from '../../constants/Colors'

const PinScreen: FC = () => {
  const firstInput = useRef<TextInput>(null)
  const secondInput = useRef<TextInput>(null)
  const thirdInput = useRef<TextInput>(null)
  const fourthInput = useRef<TextInput>(null)
  const fifthInput = useRef<TextInput>(null)
  const sixthInput = useRef<TextInput>(null)

  const [pin, setPin] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' })

  return (
    <View style={styles.container}>
      {/* <Blur /> */}
      <Text style={{ fontSize: 24, color: colors.white, padding: 10 }}>Enter PIN Code</Text>

      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} translucent />
        <Separator height={StatusBar.currentHeight} />
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.content}>Enter the OTP number just sent you at</Text>
        <View style={styles.pinContainer}>
          <View style={styles.pinBox}>
            <TextInput
              style={styles.pinText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setPin({ ...pin, 1: text })
                text && secondInput.current?.focus()
              }}
            />
          </View>
          <View style={styles.pinBox}>
            <TextInput
              style={styles.pinText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setPin({ ...pin, 2: text })
                text ? thirdInput.current?.focus() : firstInput.current?.focus()
              }}
            />
          </View>
          <View style={styles.pinBox}>
            <TextInput
              style={styles.pinText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setPin({ ...pin, 3: text })
                text ? fourthInput.current?.focus() : secondInput.current?.focus()
              }}
            />
          </View>
          <View style={styles.pinBox}>
            <TextInput
              style={styles.pinText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setPin({ ...pin, 4: text })
                text ? fifthInput.current?.focus() : thirdInput.current?.focus()
              }}
            />
          </View>
          <View style={styles.pinBox}>
            <TextInput
              style={styles.pinText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={(text) => {
                setPin({ ...pin, 5: text })
                text ? sixthInput.current?.focus() : fourthInput.current?.focus()
              }}
            />
          </View>
          <View style={styles.pinBox}>
            <TextInput
              style={styles.pinText}
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
              onChangeText={(text) => {
                setPin({ ...pin, 6: text })
                !text && fifthInput.current?.focus()
              }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.signinButton} onPress={() => console.log(pin)}>
          <Text style={styles.signinButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    flex: 1,
    padding: 5
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center'
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20
  },
  content: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20
  },
  phoneNumberText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_YELLOW
  },
  pinContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  pinBox: {
    borderRadius: 5,
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 0.5
  },
  pinText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM
  }
})

export default PinScreen
