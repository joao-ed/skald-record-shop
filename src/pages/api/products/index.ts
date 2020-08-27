// Packages
import { NextApiRequest, NextApiResponse } from 'next'

// Types
import { Product } from '~/types'

export const allData: Product[] = [
  {
    id: '1',
    title: 'Led Zeppelin IV',
    price: 2000,
    image: '/images/empty-bagdd.svg'
  },
  {
    id: '2',
    title: 'Appetite for destruction',
    price: 45671,
    image: '/images/empty-bagdd.svg'
  },
  {
    id: '3',
    title: 'Use Your Illusion I',
    price: 25345,
    image: '/images/empty-bagdd.svg'
  },
  {
    id: '4',
    title: 'Use Your Illusion II',
    price: 44356,
    image: '/images/empty-bagdd.svg'
  },

  {
    id: '5',
    title: 'Paranoid',
    price: 343536,
    image: '/images/empty-bagdd.svg'
  }
]

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(allData)
}
export default handler
