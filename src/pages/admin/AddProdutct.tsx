import React, { useState } from 'react'
import { IProduct } from '../../types/product';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps{
      products:IProduct[],
      onAdd: (product:IProduct) => void
}

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2'].map((key) => ({
  key,
  label: `nav ${key}`,
  
}));
const item =[
  { key: '1', label: 'list', url: '/admin/products' },
  { key: '2', label: 'add', url: '/admin/products/add' },

]

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

const AddProdutct = (props: any) => {
  const navigate = useNavigate()
const onFinish = (values: any) => {
  props.onAdd(values);
 
  navigate('/admin/products')
 

};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const {
      token: { colorBgContainer },
    } = theme.useToken();

  return (
     
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={item} />
        <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
    >
    
    </Menu>
        
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
            <Breadcrumb.Item>admin</Breadcrumb.Item>
            <Breadcrumb.Item>products</Breadcrumb.Item>
            <Breadcrumb.Item>add</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 100,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
             <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="price"
      name="price"
      rules={[{ required: true, message: 'Please input your price!' }]}
    > 
      <Input />
    </Form.Item>
    <Form.Item
      label="image"
      name="image"
      rules={[{ required: true, message: 'Please input your image!' }]}
    > 
      <Input />
    </Form.Item>
    <Form.Item
      label="desc"
      name="desc"
      rules={[{ required: true, message: 'Please input your description!' }]}
    > 
      <Input />
    </Form.Item>
    <Form.Item label="Select" name="categoryId" rules={[{ required: true, message: 'Danh mục không được để trống!' }]}>
                            <Select>
                                {props.categories.map((category: any) => {
                                    return <Select.Option key={category?._id} value={category._id}>{category.name}</Select.Option>
                                })}
                            </Select>
                        </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Thêm
      </Button>
    </Form.Item>
  </Form>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AddProdutct