// Packages
import React from 'react'
import { For } from 'react-extras'
import { ActionItem } from './action-item'

export interface Actions<T> {
  content: React.ReactNode
  contentData?: T
  icon?: React.ReactNode
}

interface ActionsProps<T> {
  actions: Actions<T>[]
  onClickCallback?: (item?: T) => void
}

export function ActionList<T>({ actions, onClickCallback }: ActionsProps<T>) {
  const onClick = (key: number) => {
    const { contentData } = actions[key]
    onClickCallback && onClickCallback(contentData)
  }

  return (
    <For
      of={actions}
      render={(item, index) => (
        <div onClick={() => onClick(index)} style={{ padding: '1rem' }}>
          <ActionItem {...item}>{item.content}</ActionItem>
        </div>
      )}
    />
  )
}
