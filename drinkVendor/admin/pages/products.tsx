import axios from 'axios'
import CusTable from '../componets/custable'
import styles from '../styles/Home.module.css'
import { Machine, Product } from './api/resp'

type productsProps = {
  cols: any[],  data: any[]
}
export default function Products({ cols, data } : productsProps) {
  return (
    <div className={styles.container}>
      <main>
        <CusTable data={data} cols={cols}></CusTable>
      </main>
    </div>
  )
}

Products.getInitialProps = async () => {
  // const url = 'http://localhost:5000/products'
  // const resp = await axios.get(url)
  // const json: Product[] = await resp.data
  const json = [ "x", "x"]


  const cols = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    }
  ]

  const data = json.map(m => {
    return { key: 1, name: 1, location: 1}
  })

  return { cols, data }
}
