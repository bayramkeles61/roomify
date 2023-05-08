import { StyleSheet } from 'react-native'
import { BlurView } from '@react-native-community/blur'

const Blur = () => {
  return <BlurView style={styles.absolute} blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white" />
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

export default Blur
