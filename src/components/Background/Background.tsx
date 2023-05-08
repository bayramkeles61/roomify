import { FC } from 'react'
import { View, StyleSheet, Image } from 'react-native'

const Background: FC = () => {
  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
    zIndex: -1
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

export default Background
