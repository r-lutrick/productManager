import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8001/api/product/get/${id}`)
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => { console.log(`Product Detail error: ${err}`) })
    }, [id])

    return (
        <div className='w-50 m-auto'>
            <h1>Product Detail</h1>
            <table className='table table-bordered'>
                <thead className='table-dark'>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-outline-dark w-50' onClick={(e) => {e.preventDefault(); navigate('/')}}>Home</button>
        </div>
    )
}

export default ProductDetail