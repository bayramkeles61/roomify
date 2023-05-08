import { FC } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import fonts from '../../theme/fonts'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Fonts from '../../constants/Fonts'
import Colors from '../../constants/Colors'

interface IButton {
  text?: string
  color?: string
  size?: number
  icon?: string
  onPress?: () => void
}

const Button: FC<IButton> = ({ text = '', color, size, icon, onPress = () => {} }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon name={icon ? icon : ''} size={size ? size + 6 : 20} color={color ? color : Colors.SECONDARY_RED} />
      <Text
        style={[
          styles.text,
          {
            fontSize: size ? size : 20,
            color: color ? color : Colors.DEFAULT_WHITE
          }
        ]}
        numberOfLines={1}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    // backgroundColor: 'rgba(255,255,255,0.2)',
    overflow: 'hidden',
    marginHorizontal: 5,

    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  text: {
    fontWeight: fonts.weight.semi,
    marginLeft: 5,
    fontFamily: Fonts.POPPINS_BOLD
  }
})
export default Button
