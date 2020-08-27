// Packages
import { NextApiRequest, NextApiResponse } from 'next'
import { allData } from '.'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id }
  } = req
  const product = allData.find((product) => product.id === id)
  if (!product) {
    return res.status(404).json({
      status: 404,
      message: 'Product Not Found'
    })
  }
  return res.json(product)
}
