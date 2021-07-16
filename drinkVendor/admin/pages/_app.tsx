import '../styles/globals.css'
import "antd/dist/antd.css";
import type { AppProps } from 'next/app'
import AdminLayout from '../componets/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  )
}
export default MyApp
