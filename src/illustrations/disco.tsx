// Packages
import React, { FC } from 'react'

interface IllustrationProps {
  width?: string
  height?: string
}

export const Disco: FC<IllustrationProps> = ({ width, height }) => (
  <svg
    id="Capa_1"
    enableBackground="new 0 0 512 512"
    height={height}
    viewBox="0 0 512 512"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g>
        <path d="m32.5 413 373-40-62-373-343 37z" fill="#d68034" />
        <path
          d="m220.5 136 62-28-28-52-85 32 46 122c-11-11-28-22-53-22-37 0-67 34.758-67 69 0 29 28 62 74 62 40.869 0 82-26 82-66 0-9.363-31-117-31-117z"
          fill="#f3d544"
        />
        <g fill="#b66624">
          <path d="m122.5 375-73 8-4-88z" />
          <path d="m38.5 102 92-21 9 20-97 21z" />
          <path d="m45.5 141 98-26 9 18-103 26z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="m338.5 166c-80 0-173 77.455-173 173 0 103 85 173 173 173 91 0 173-77.455 173-173s-77.455-173-173-173zm0 193c-11.046 0-20-8.954-20-20 0-10 8.954-20 20-20s22 8.954 22 20-10.954 20-22 20z"
            fill="#e7e2d5"
          />
          <path
            d="m339.5 182c-90 0-157 70.291-157 157 0 86.708 70.291 159 157 159 79 0 159-85 159-161 0-86.709-72.291-155-159-155zm-1 177c-11.046 0-20-8.954-20-20 0-10 8.954-20 20-20s22 8.954 22 20-10.954 20-22 20z"
            fill="#f4efe3"
          />
          <path
            d="m339.5 303c-17 0-36 16.118-36 36s16.118 36 36 36 36-20 36-36c0-19.882-20-36-36-36zm-1 56c-11.046 0-20-8.954-20-20 0-10 8.954-20 20-20s22 8.954 22 20-10.954 20-22 20z"
            fill="#e7e2d5"
          />
        </g>
        <path
          d="m340.5 200c-77.32 0-140 62.68-140 140s42 140 140 140c77.32 0 140-62.68 140-140 0-92-62.68-140-140-140zm0 196c-30.928 0-56-25.072-56-56s30-56 56-56c30.928 0 56 25.072 56 56 0 26-25.072 56-56 56z"
          fill="#f3d544"
        />
        <g fill="#edbc40">
          <path d="m210.611 287.687 79.724 29.066c6.532-12.636 17.833-22.753 30.203-28.239l-35.244-77.201c-33.885 14.556-60.867 42.102-74.683 76.374z" />
          <path d="m472.25 387.442-81.324-25.21c-5.528 11.176-14.814 21.277-26.252 27.459l41.738 73.845c30.36-16.233 54.036-43.326 65.838-76.094z" />
        </g>
      </g>
    </g>
  </svg>
)

Disco.defaultProps = {
  width: '100',
  height: '100'
}
