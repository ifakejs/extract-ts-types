export type FlattenType = any[]

export function flatten(arr: FlattenType): FlattenType {
  return arr.reduce( (a, b) => a.concat(b), [])
}