import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = () => {
    const [product, setProduct] = useState([])
    // const [edit, setEdit] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8001/api/product/get/${id}`)
            .then((res) => { setProduct(res.data) })
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
            <div className='d-flex justify-content-around'>
                <button className='btn btn-dark w-25' onClick={() => { navigate(`/`) }}>Home</button>
                <button className='btn btn-outline-dark w-25' onClick={() => { navigate(`/edit/${product._id}`) }}>Edit</button>
            </div>
        </div>
    )
}

export default Detail