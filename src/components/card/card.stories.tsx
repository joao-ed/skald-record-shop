import React from 'react'
import { Card } from './card'
import { Text } from '~/components'

export default {
  title: 'Components/Card'
}

export const BasicCard = () => (
  <Card>
    <Text>Título</Text>
    <Text>Conteúdo</Text>
  </Card>
)
