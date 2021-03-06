// Packages
import React, { FC } from 'react'
import { If } from 'react-extras'
import FocusLock from 'react-focus-lock'
import KeyHandler from 'react-key-handler'
import { useLockBodyScroll } from 'react-use'
import { Close } from '@styled-icons/evaicons-solid'

// Components
import { Flex, Box, IconButton } from '~/components'

// Styles
import * as S from './styles'

interface FullscreenModalProps {
  open: boolean
  toggleModal: () => void
}

export const FullscreenModal: FC<FullscreenModalProps> = ({
  open,
  toggleModal,
  children
}) => {
  useLockBodyScroll(open)
  return (
    <If
      condition={open}
      render={() => {
        return (
          <FocusLock disabled={!open}>
            <KeyHandler
              keyEventName="keydown"
              keyValue="Escape"
              onKeyHandle={toggleModal}
            />
            <S.Fixed>
              <S.Fullscreen>
                <Flex padding="2rem" flexDirection="column">
                  <Box>
                    <IconButton
                      icon={<Close width={32} color="black" />}
                      onClick={toggleModal}
                    />
                  </Box>
                  <Box>{children}</Box>
                </Flex>
              </S.Fullscreen>
            </S.Fixed>
          </FocusLock>
        )
      }}
    />
  )
}
