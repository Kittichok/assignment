
export type Machine = {
  name: string,
  id: number
}

export type Product = {
  stock: number,
  product: {
    id: number,
    name: string
  }
}