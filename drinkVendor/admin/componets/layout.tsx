import { Layout, Menu } from 'antd';
import {
  ShopOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import Link from 'next/link'

const { Sider, Content } = Layout;

export default function AdminLayout({ children }) {
  return (
    <>
      <Layout>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<ShopOutlined />}>
              <Link href="/">Machine</Link>
            </Menu.Item>
            {/* <Menu.Item key="2" icon={<ShoppingOutlined />}>
              <Link href="/products">Product</Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <main>{children}</main>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}