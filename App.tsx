import React from 'react'
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import Header from './src/components/Header'
import colors from './src/theme/colors'
import Status from './src/components/Status'
import BookingsScreen from './src/screens/BookingsScreen'
import Background from './src/components/Background'
import PinScreen from './src/screens/PinScreen/PinScreen'
import Blur from './src/components/Blur'
import config from './src/aws-exports'
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
