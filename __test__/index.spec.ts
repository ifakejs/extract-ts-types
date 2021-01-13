import { pkgAdd } from '../src'

describe('pkgAdd', () => {
  it('should return correct value', function () {
    expect(pkgAdd([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })
})
