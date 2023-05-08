import React, { FC } from 'react'
import { View, Text } from 'react-native'

interface ISeparator {
  height?: number
  width?: number
}

const Separator: FC<ISeparator> = ({ height, width, ...extraProps }) => {
  return <View style={{ height, width, ...extraProps }} />
}

Separator.defaultProps = {
  height: 0,
  width: 0
}

export default Separator
