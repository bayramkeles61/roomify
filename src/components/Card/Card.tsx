import { View, Text, StyleSheet } from 'react-native'

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 16
  }
})

export default Card
