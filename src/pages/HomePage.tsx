import React, { useState } from 'react';
import { Carousel, Col, Row, Divider, List, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';
import { PlusSquareOutlined } from '@ant-design/icons';
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };


const contentStyle: React.CSSProperties = {
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
};

const HomePage = (props: any) => {
    const data = props.products.map((product: any) => {
        return {
            title: product.name,
            price: product.price,
            image: product.image,
        }
    });
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}><img width={'100%'} height={350} src="https://thietkehaithanh.com/wp-content/uploads/2019/06/huong-dan-thiet-ke-banner-dien-thoai-bang-photoshop.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img width={'100%'} height={350} src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai-dep_103211368.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img width={'100%'} height={350} src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-gioi-thieu-san-pham_103215430.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img width={'100%'} height={350} src="https://www.playquatrogames.com.br/images/webp-banners/banner-xiaomi-curitiba-redmi-8-redmi9.webp" alt="" /></h3>
                </div>
            </Carousel>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <div className="card bg-light mb-3">
                            <form className="pb-3" action="index.php?act=sanpham" method="post">
                                <div className="input-group">
                                    <input type="text" className='form-control' placeholder="Tìm kiếm sản phẩm..." />
                                    <div className="input-group-append">
                                        <input type="submit" className='btn btn-success' value="Tìm kiếm" />
                                    </div>
                                </div>
                            </form>
                            <div className="card-header bg-secondary text-white text-uppercase"><i className="fa fa-list"></i> Danh mục
                            </div>
                            <ul className="list-group category_block">
                                {/* {props.categorys.map((category: any) => {
                                    return <li className="list-group-item" key={category._id}><Link style={{ textDecoration: 'none' }} to={category._id}>{category.name}</Link></li>
})} */}

                            </ul>
                        </div>
                        <div className="card bg-light mb-3">
                            <div className="card-header bg-success text-white text-uppercase">TOP 10 YÊU THÍCH</div>

                            <div className="card-body">
                                <img className="img-fluid" src="" width="50" />
                                <a href="" className="card-title"></a>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div style={{ height: 50 }} className="card-header bg-success text-white text-uppercase text-center">
                            <PlusSquareOutlined /> <p style={{ marginTop: 1 }}>Sản phẩm mới nhất</p>
                        </div>
                        <div className="row">
                            {props.products.map((product: any) => {
                                return <div className="col-12 col-md-6 col-lg-4 mt-2">
                                    <div className="card">
                                        <a href=""><img src={product.image} alt="" width={'100%'} /></a>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: 'center' }}><Link style={{ textDecoration: 'none' }} to={product._id}>{product.name}</Link>
                                            </h5>
                                            <div className="row">
                                                <div className="col" style={{ textAlign: 'center' }}>
                                                    <p style={{ fontSize: 18 }} className="btn font-weight-bold text-danger">${product.price}</p>
                                                </div>
                                            </div>
                                            <form  >
                                                <input type="submit" className='btn btn-danger btn-block' value={'MUA NGAY'} />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage