import React from 'react'

import { FullscreenModal } from './fullscreen-modal'
import { useToggle } from 'react-use'

export default {
  title: 'Components/Fullscreen'
}

export const BasicModal = () => {
  const [open, toggleModal] = useToggle(false)

  return (
    <div>
      <button onClick={toggleModal}>open modal fullscreen</button>
      <FullscreenModal open={open} toggleModal={toggleModal}>
        <ul style={{ color: 'black', margin: '4rem' }}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </FullscreenModal>
    </div>
  )
}
