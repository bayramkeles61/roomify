import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native'
import Header from './components/Header'
import colors from './theme/colors'
import Status from './components/Status'
import BookingsScreen from './screens/BookingsScreen'
import Background from './components/Background'
import PinScreen from './screens/PinScreen/PinScreen'
import Blur from './components/Blur'
import config from '../aws-exports'
import { Amplify } from 'aws-amplify'

Amplify.configure(config)

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.black : colors.white
  }
  const background = { uri: 'https://reactjs.org/logo-og.png' }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{ width: '100%', height: '100%' }}>
        {/* <Blur /> */}
        <Background />
        {/* <PinScreen /> */}
        <Header />
        <View style={styles.sectionContainer}>
          <Status />
          <BookingsScreen />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
