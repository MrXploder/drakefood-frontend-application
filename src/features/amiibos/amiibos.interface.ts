export default interface IAmiibo {
  amiiboSeries: string
  character: string
  gameSeries: string
  head: string
  image: string
  name: string
  release: Record<string, string | null>
  tail: string
  type: string
  price: number
  id: string
}
