export type ChunkType = any[][]

export function chunk(arr: any[], size: number = 0): ChunkType {
  const snap: ChunkType = []
  let step = Math.ceil(arr.length / size)
  let index = 0
  while(step > 0) {
    snap.push(arr.slice(index, index += size))
    step -= 1
  }
  return snap
}