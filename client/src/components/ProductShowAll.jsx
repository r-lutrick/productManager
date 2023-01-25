import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductView = (props) => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8001/api/product/get')
            .then(res => setProducts(res.data))
            .catch(err => console.log(`Getting data error: ${err}`))
    }, [props])

    const handleClick = (e, id) => {
        e.preventDefault()
        navigate(`/product/${id}`)
    }

    return (
        <div className='w-50 m-auto'>
            <h1>All Products:</h1>
            {
                products.map((prod, i) => {
                    return (
                        <div key={i}>
                            <p className='btn btn-outline-dark w-50 text-capitalize' style={{cursor: "pointer"}} onClick={(e) => handleClick(e, prod._id)}>
                                {prod.title}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductView