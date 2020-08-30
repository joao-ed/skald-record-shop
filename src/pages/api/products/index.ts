// Packages
import { NextApiRequest, NextApiResponse } from 'next'

// Types
import { Product } from '~/types'

export const allData: Product[] = [
  {
    id: '1',
    title: 'Led Zeppelin IV',
    price: 2000,
    image: 'https://i.ibb.co/7rW68q5/led-zeppelin-IV.jpg'
  },
  {
    id: '2',
    title: 'Sorceress',
    price: 45671,
    image: 'https://i.ibb.co/wY1W4Sk/opeth-sorceress-lp.jpg'
  },
  {
    id: '3',
    title: 'Use Your Illusion I',
    price: 25345,
    image: 'https://i.ibb.co/7Ny1CSx/use-your-illusion-I-jpg.jpg'
  },
  {
    id: '4',
    title: 'Use Your Illusion II',
    price: 44356,
    image: 'https://i.ibb.co/5Gb7jS4/use-your-illusion-II.jpg'
  },

  {
    id: '5',
    title: 'Paranoid',
    price: 343536,
    image: 'https://i.ibb.co/XLw3zmh/black-sabbath-paranoid-lp.jpg'
  },
  {
    id: '6',
    title: 'Rust in Peace',
    price: 343536,
    image: 'https://i.ibb.co/KNQMgVk/megadeth-rust-in-peace-lp.jpg'
  }
]

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(allData)
}
export default handler
