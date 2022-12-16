import { View } from 'react-native'
import React from 'react'
import { Text } from '@ui-kitten/components'
import styles from './styles'

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text category='h3' >{title}</Text>
    </View>
  )
}