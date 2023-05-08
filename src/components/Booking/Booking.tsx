import { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import bookings from '../../assets/data/bookings.json'
import moment from 'moment'
import Fonts from '../../constants/Fonts'
import Colors from '../../constants/Colors'

interface IBooking {
  id: string
  name: string
  booking: string
}

interface IBookingProps {
  day: any
  includeDetails?: boolean
}

const Booking: FC<IBookingProps> = ({ day, includeDetails }) => {
  const filterTodayBooking = (booking: any) => {
    const today = new Date()
    return booking.date === today.toISOString().split('T')[0]
  }

  const startTime = moment(day.date)
  var iscurrentDate = startTime.isSame(new Date(), 'day')

  return (
    <View style={styles.booking}>
      <View
        style={{
          width: 50,
          alignItems: 'center',
          padding: 5
        }}
      >
        <Text style={styles.day}>{day.day}</Text>
        <Text style={styles.number}>{day.number}</Text>
      </View>
      <View style={styles.cards}>
        {bookings.map((booking) => (
          <View style={styles.card} key={booking.id}>
            <Text style={styles.title}>{booking.title}</Text>
            <View style={styles.date}>
              <Text style={styles.text}>{moment.unix(booking.start_date).format('LT')}</Text>
              <Text style={styles.text}> to </Text>
              <Text style={styles.text}>{moment.unix(booking.end_date).format('LT')}</Text>
              <Text style={styles.text}>, {iscurrentDate ? 'Today' : 'Tomorrow'}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  booking: {
    flexDirection: 'row',
    width: '100%'
  },
  day: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_WHITE
  },
  number: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 30,
    color: Colors.DEFAULT_WHITE
  },
  cards: { flex: 1, width: '100%', marginBottom: 25 },
  card: {
    padding: 10,
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 5
  },
  title: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: 20
  },
  date: {
    flexDirection: 'row',
    paddingTop: 5
  },
  text: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_BOLD
  }
})
export default Booking
