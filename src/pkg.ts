import { flatten, FlattenType } from './utils/flatten'
import { chunk } from './utils/chunk'

export function pkgAdd(arr: any[]): FlattenType {
  const ck = chunk(arr, 2)
  return flatten(ck)
}
