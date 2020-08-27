import { stringFormat } from './index'

describe('stringFormat', () => {
  test('currency', () => {
    const amount = 1000
    expect(stringFormat.currency(amount)).toEqual('R$ 10.00')
    expect(stringFormat.currency(0 - amount)).toEqual('- R$ 10.00')
  })
})
