import axios from 'axios'
import styles from '../../styles/Home.module.css'
import CusTable from '../../componets/custable'
import { Product } from '../api/resp'

type stockProps = {
  cols: any[],  data: any[]
}

const MachineStock = ({data, cols}: stockProps) => {
  return (
    <div className={styles.container}>
      <main>
        <h2>Machine stock</h2>
        <CusTable data={data} cols={cols}></CusTable>
      </main>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const mid = query.mid
  const url = `http://localhost:5000/machines/${mid}`
  const resp = await axios.get(url)
  const json: Product[] = await resp.data

  const cols = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Avaliable',
      dataIndex: 'stock',
      key: 'stock',
    }
  ]

  const data = json.map(p => {
    return { key: p.product.id, name: p.product.name, stock: p.stock}
  })
  return { props: { cols, data } }
}

export default MachineStock