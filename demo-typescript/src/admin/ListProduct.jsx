import React, { useEffect, useState } from 'react'

const ListProduct = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.products);
    }, [props]);

    function removeProduct(id) {
        props.onRemove(id);
    }
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product, index) => (
                        <tr
                            key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>
                            <button className='btn-remove' onClick={() => removeProduct(product.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr />
        </div>
    )
}

export default ListProduct