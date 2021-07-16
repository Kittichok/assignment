import axios from 'axios'
import CusTable from '../componets/custable'
import styles from '../styles/Home.module.css'
import { Machine } from './api/resp'
import { useRouter } from 'next/router'

type indexProps = {
  cols: any[],  data: any[]
}

function Index({ cols, data }: indexProps) {
  const router = useRouter()

  const onSelectRow = (mid: number) => {
    const url = `/machine/${mid}`
    router.push(url)
  }

  return (
    <div className={styles.container}>
      <main>
        <h2>Machine List</h2>
        <CusTable data={data} cols={cols} onSelectRow={onSelectRow}></CusTable>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const url = 'http://localhost:5000/machines'
  const resp = await axios.get(url)
  const json: Machine[] = await resp.data

  const cols = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
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
    return { key: m.id, name: m.name, location: m.locationName, id: m.id}
  })
  return { props: { cols, data } }
}

export default Index;