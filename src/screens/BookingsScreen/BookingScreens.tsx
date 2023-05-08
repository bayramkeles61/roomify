import { FC } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import Booking from '../../components/Booking/Booking'

const BookingsScreen: FC = () => {
  const days = [
    {
      id: '1',
      number: '1',
      day: 'Mon',
      month: 'May'
    },
    {
      id: '2',
      number: '2',
      day: 'Tue',
      month: 'May'
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => <Booking day={item} includeDetails />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  }
})
export default BookingsScreen
