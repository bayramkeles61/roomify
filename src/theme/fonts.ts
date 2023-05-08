import { TextStyle } from 'react-native'

const size = {
  xs: 10,
  sm: 12,
  default: 14,
  md: 16,
  lg: 24,
  xlg: 30,
  xxlg: 40,
  xxxlg: 50
}

const weight: { [key: string]: TextStyle['fontWeight'] } = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400'
}
export default { size, weight }
