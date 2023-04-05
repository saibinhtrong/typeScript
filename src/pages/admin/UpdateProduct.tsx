import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { Button, Form, Input } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

      interface IProps{
        products:IProduct[],
        onUpdate: (product:IProduct) => void
}
const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const UpdateProduct = (props:IProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 



  const [product, setProduct] = useState<IProduct>() // khởi tạo biến state product có kiểu dữ liệu là IProduct
  useEffect(() => { // khi props thay đổi thì sẽ chạy useEffect này
      const currentProduct = props.products.find((product: IProduct) => product.id == Number(id))
      // tìm trong mảng props.products có phần tử nào có id trùng với id trên url không
      setProduct(currentProduct) // nếu có thì set lại giá trị cho biến product
  }, [props])
  useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
      setFields() // gọi hàm setFields để set lại giá trị cho các input
  }, [product])
  const [form] = Form.useForm();
  // khởi tạo một instance của Form và gán vào biến form
  // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

  const setFields = () => {// hàm này để set lại giá trị cho các input
      form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
          id: product?.id,
          name: product?.name,
          price: product?.price
      })
  }

  const onFinish = (values: any) => {
      props.onUpdate(values);
      navigate('/admin/products')
  };

  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
           <div>
        <Form
              form={form}
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
          >
              {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
              <Form.Item
                  label=""
                  name="id"
                  style={{ display: 'none' }} // ẩn input này đi
                  rules={[{ required: true, message: 'Please input your username!' }]}
              >
                  <Input />
              </Form.Item>


              <Form.Item
                  label="Product Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your username!' }]}
              >
                  <Input />
              </Form.Item>

              <Form.Item
                  label="Product Price"
                  name="price"
                  rules={[{ required: true, message: 'Please input your password!' }]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
                  label="Product image"
                  name="image"
                  rules={[{ required: true, message: 'Please input your password!' }]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
                  label="Product desc"
                  name="desc"
                  rules={[{ required: true, message: 'Please input your password!' }]}
              >
                  <Input />
              </Form.Item>


              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                      Update Product
                  </Button>
              </Form.Item>
          </Form>
      </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
     
  )
}

export default UpdateProduct