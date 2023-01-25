import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const ProductView = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8001/api/product/get')
            .then(res => setProducts(res.data))
            .catch(err => console.log(`Getting data error: ${err}`))
    }, [])

    return (
        <div className='w-50 m-auto'>
            <h1>All Products:</h1>
            <table className='table table-bordered'>
                <thead className='table-dark'>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    products.map((prod, i) => {
                        return (
                            <tr key={i}>
                                <td>{prod.title}</td>
                                <td>${prod.price}</td>
                                <td>{prod.description}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductView