import { useContext } from 'react'

// Contexts
import { Context as ProductContext, ProductContextProps } from '~/contexts'

export const useProductContext = () => {
  const context = useContext(ProductContext)
  return context as ProductContextProps
}
