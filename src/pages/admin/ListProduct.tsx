import React, { useState, useEffect } from "react";
import { IProduct } from "../../types/product";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Table, Space, Button } from "antd";
import { Link } from 'react-router-dom'

// layout
const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2',].map((key) => ({
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
//end layout


interface DataType {
  key: string | number;
  name: string;
  price: number;
  image: string;
  desc: string;
}
interface IProps {
  products: IProduct[],
  onRemove: (id: number) => void
}

const ListProduct = (props: IProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const data: DataType[] = props.products.map((item: IProduct) => {
    return {
        key: item.id,
        name: item.name,
        price: item.price,
        desc: item.desc,
        image: <img width={100} src ={item.image}/>
    }
})
  const removeProduct = (id: number) => {
    props.onRemove(id)
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Product Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
      title: 'Product image',
      dataIndex: 'image',
      key: 'image',
  },
  {
    title: 'Product desc',
    dataIndex: 'desc',
    key: 'desc',
},
    {
        title: 'Action',
        key: 'action',
        render: (_,record) => (

          <Space className="site-button-ghost-wrapper" wrap>
          <Button type="primary" onClick={() => removeProduct(record.key)} danger ghost>Remove</Button>
          <Button type="primary" ghost>
          <Link className="link" to={`/admin/products/${record.key}/update`}>Update</Link></Button>
         
      </Space>
        ),
    },
];



return (
  <Layout>
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  items={items1} ></Menu>
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
         <div >
        <Button type='primary'><Link className="link" to={'/admin/products/add'}>Add New Product</Link></Button>
        <Button style={{marginLeft :900}} type='primary'><Link className="link" to={'/'}>Home Page</Link></Button>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} />
    </div>
      </Content>
    </Layout>
  </Layout>
</Layout>
   
)
}

export default ListProduct;
