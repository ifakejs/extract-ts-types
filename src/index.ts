import { flatten } from './utils/flatten'
import { chunk } from './utils/chunk'

// export { FlattenType } from './utils/flatten'
// export { ChunkType } from './utils/chunk'

export function pkgAdd(arr: any[]) {
  const ck = chunk(arr, 2)
  return flatten(ck)
}
