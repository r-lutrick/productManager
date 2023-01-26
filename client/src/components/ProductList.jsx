import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductView = (props) => {
    const navigate = useNavigate()

    const handleClick = (e, id) => {
        e.preventDefault()
        navigate(`/detail/${id}`)
    }

    return (
        <div className='w-50 m-auto'>
            <h1>All Products:</h1>
            {props.products.map((prod, i) => {
                return (
                    <div key={i}>
                        <p style={{ cursor: "pointer" }} onClick={(e) => handleClick(e, prod._id)} className='btn btn-outline-dark w-50 text-capitalize' >
                            {prod.title}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductView