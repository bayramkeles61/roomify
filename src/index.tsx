import { FC, useState } from 'react'
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import Header from './components/Header'
import colors from './theme/colors'
import Status from './components/Status'
import BookingsScreen from './screens/BookingsScreen'
import Background from './components/Background'
import PinScreen from './screens/PinScreen/PinScreen'
import Blur from './components/Blur'
import config from '../aws-exports'
import { Amplify } from 'aws-amplify'
import { isTablet, getUniqueId, getManufacturer } from 'react-native-device-info'
import Colors from './constants/Colors'
import Fonts from './constants/Fonts'

Amplify.configure(config)

const App: FC = () => {
  const isDarkMode = useColorScheme() === 'light'

  const [deviceId, setDeviceId] = useState('Click below to get unique Id')
  const [deviceManufacturer, setDeviceManufacturer] = useState('Click below to get manufacturer')

  const getDeviceId = async () => {
    const uniqueId = await getUniqueId()
    setDeviceId(uniqueId)
  }
  const getDeviceManufacturer = async () => {
    const manufacturer = await getManufacturer()
    setDeviceManufacturer(manufacturer)
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.black : colors.white
  }
  const background = { uri: 'https://reactjs.org/logo-og.png' }

  return (
    <SafeAreaView style={backgroundStyle}>
      {isTablet() ? (
        <>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View style={{ width: '100%', height: '100%' }}>
            {/* <Blur /> */}
            <Background />
            {/* <PinScreen /> */}
            <Header />
            <View>
              <Pressable onPress={getDeviceId} style={styles.buttonStyle}>
                <Text style={styles.buttonStyle}>Click here to get unique Id</Text>
              </Pressable>
              <Text style={styles.deviceInfo}>{deviceId}</Text>

              <Text style={styles.deviceInfo}>{isTablet() ? 'Tablet' : 'Phone'}</Text>

              <Pressable onPress={getDeviceManufacturer} style={styles.buttonStyle}>
                <Text style={styles.buttonStyle}>Click here to get manufacturer</Text>
              </Pressable>
            </View>
            <Text style={styles.deviceInfo}>{deviceManufacturer}</Text>
            {/* <View style={styles.sectionContainer}>
          <Status />
          <BookingsScreen />
        </View> */}
          </View>
        </>
      ) : (
        <View
          style={{
            backgroundColor: Colors.DEFAULT_BLACK,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              color: Colors.DEFAULT_WHITE,
              fontFamily: Fonts.POPPINS_BOLD,
              fontSize: 30
            }}
          >
            Device is not a TABLET!
          </Text>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.GOOGLE_BLUE,
    width: 250,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  deviceInfo: {
    backgroundColor: Colors.LIGHT_RED,
    padding: 10,
    margin: 5
  },

  sectionContainer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    flex: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    backgroundColor: '#000000c0'
  }
})

export default App
