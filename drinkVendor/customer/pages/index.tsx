import styles from '../styles/Home.module.css'
import { Button, Form, InputNumber, Select } from "antd";
import React, { useState } from 'react';
import { Machine, Product } from './api/resp';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

type homeProps = {
  machines: Machine[]
}
function Home({ machines } : homeProps) {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [products, setProducts] = useState([]);

  const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onMachineChange = async (value: number) => {
    form.setFieldsValue({ product: '' });
    const url = `http://localhost:5000/machines/${value}`
    const resp = await axios.get(url)
    if (resp.data) {
      setProducts(resp.data)
    }
  }

  const onFinish = async (values: any) => {
    const url = `http://localhost:5000/purchase`
    const resp = await axios.post(url, { machineId: values.machine, productId: values.product, quantity: values.quantity })

    MySwal.fire({
      icon: 'success',
      title: <p>Complete</p>,
      showConfirmButton: false,
      })
    form.resetFields();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="machine" label="Machine" rules={[{ required: true }]}>
            <Select
              placeholder="Select machine"
              onChange={onMachineChange}
              allowClear
            >
              {machines.map((m: Machine) => (
                <Option key={m.name} value={m.id}>{m.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="product" label="Product" rules={[{ required: true }]}>
            <Select
              placeholder="Select product"
              allowClear
            >
              {products.map((p: Product) => (
                <Option key={p.product.name} value={p.product.id}>{p.product.name}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Quantity" name="quantity">
            <InputNumber min={1} max={99} defaultValue={1}/>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:5000/machines'
  const resp = await axios.get(url)
  const json = await resp.data
  return { machines: json }
}

export default Home;