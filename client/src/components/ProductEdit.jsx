import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductEdit = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [title, setTitle] = useState(product.title)
    const [price, setPrice] = useState(product.price)
    const [description, setDescription] = useState(product.description)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8001/api/product/get/${id}`)
            .then(res => {setProduct(res.data)})
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8001/api/product/update/${id}`, { title, price, description })
            .then(res => navigate(`/detail/${product._id}`))
            .catch(err => console.log(err))
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        if ( window.confirm(`Are you sure you want to delete ${product.title}`) ) {
            axios.delete(`http://localhost:8001/api/product/delete/${id}`)
                .then(res => navigate(`/`))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='w-50 m-auto'>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className='form-control mb-3'
                        placeholder={ product.title }
                        onChange={(e) => { setTitle(e.target.value) }} />
                    <input
                        type="text"
                        className='form-control mb-3'
                        placeholder={ product.price }
                        onChange={(e) => { setPrice(e.target.value) }} />
                    <input
                        type="text"
                        className='form-control mb-3'
                        placeholder={ product.description }
                        onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-dark w-25'>Update</button>
                    <button className='btn btn-outline-danger w-25' onClick={(e) => { handleDelete(e, product._id) }}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default ProductEdit