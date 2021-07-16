
export type Machine = {
  name: string,
  id: number,
  locationName: string,
}

export type Product = {
  stock: number,
  product: {
    id: number,
    name: string
  }
}